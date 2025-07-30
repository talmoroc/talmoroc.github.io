const fs = require('fs').promises;
const path = require('path');

/**
 * Reads a JSON file, processes its content to generate graph data,
 * and writes the result to a new JSON file.
 */
async function generateGraphData() {
    try {
        // --- 1. READ AND PARSE THE INPUT DATA ---
        console.log('Reading data.json...');
        const inputFilePath = path.join(__dirname, 'content.json');
        const data = await fs.readFile(inputFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        const contentNodes = jsonData.contentNodes;

        if (!contentNodes) {
            throw new Error('Input JSON must have a "contentNodes" key containing an array.');
        }

        // --- 2. EXTRACT DATA AND CALCULATE SIZES ---
        console.log('Extracting nodes and categories...');

        // RENAME: `contentArray` (array of content node titles)
        const contentArray = contentNodes.map(node => node.title);
        const allCategories = contentNodes.flatMap(node => node.tags);
        const categoryArray = [...new Set(allCategories)].sort();
        const thumbnailsPathArray = contentNodes.map(node => node.thumbnail);
        const numContentNodes = contentNodes.length;
        const categoryCount = categoryArray.length;
        const graphSize = numContentNodes + categoryCount;
        const contentCount = graphSize - categoryCount;


        // --- 3. PREPARE FOR MATRIX CONSTRUCTION ---
        const categoryToIndexMap = new Map();
        categoryArray.forEach((category, index) => {
            categoryToIndexMap.set(category, index);
        });

        const adjMatrix = new Array(graphSize * graphSize).fill(0);

        const setMatrixValue = (row, col, value, additive = false) => {
            const index1 = row * graphSize + col;
            const index2 = col * graphSize + row;
            if (additive) {
                adjMatrix[index1] += value;
                if (row !== col) adjMatrix[index2] += value;
            } else {
                adjMatrix[index1] = value;
                adjMatrix[index2] = value;
            }
        };

        // --- 4. POPULATE THE ADJACENCY MATRIX ---
        console.log('Computing adjacency matrix...');

        // Pre-calculate category weights (for diagonal)
        const categoryWeightsMap = new Map();
        for (const category of allCategories) {
            categoryWeightsMap.set(category, (categoryWeightsMap.get(category) || 0) + 1);
        }

        // Apply weights and links by iterating through each content node
        contentNodes.forEach(node => {
            const contentIndex = node.id + categoryCount; // Adjust index to account for category nodes
            const nodeTags = node.tags;
            const n = nodeTags.length;

            setMatrixValue(contentIndex, contentIndex, 1); // Diagonal equals to 1

            nodeTags.forEach(tag => {
                const categoryIndex = categoryToIndexMap.get(tag);
                setMatrixValue(contentIndex, categoryIndex, 0.1);
            });

            if (n > 1) {
                for (let i = 0; i < n; i++) {
                    for (let j = i + 1; j < n; j++) {
                        const cat1Index = categoryToIndexMap.get(nodeTags[i]);
                        const cat2Index = categoryToIndexMap.get(nodeTags[j]);
                        setMatrixValue(cat1Index, cat2Index, 1 / n / 2, true);
                    }
                }
            }
        });

        // Set the diagonal weights for all category nodes
        categoryArray.forEach(category => {
            const categoryIndex = categoryToIndexMap.get(category);
            const weight = categoryWeightsMap.get(category);
            adjMatrix[categoryIndex * graphSize + categoryIndex] = weight;
        });

        // --- 5. NEW: COMPUTE `nodeWeights` ARRAY ---
        console.log('Computing node weights array...');
        const nodeWeights = [];
        for (let i = 0; i < graphSize; i++) {
            // The weight is simply the value on the matrix diagonal
            nodeWeights.push(adjMatrix[i * graphSize + i]);
        }
        const nodeWeightsMax = nodeWeights.reduce((max, weight) => Math.max(max, weight), 0);
        // Normalize node weights to a range of 0 to 1
        for (let i = 0; i < nodeWeights.length; i++) {  
            nodeWeights[i] = nodeWeights[i] / nodeWeightsMax;
        }


        // --- 6. ASSEMBLE FINAL OUTPUT AND WRITE TO FILE ---

        const outputData = {
            graphSize,
            categoryCount,
            categoryArray,
            contentCount,
            contentArray,
            thumbnailsPathArray,
            nodeWeights,
            adjMatrix
        };

        const outputFilePath = path.join(__dirname, 'graph_data.json');
        console.log(`Writing computed data to ${outputFilePath}...`);

        await fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 4));

        console.log('Success');

    } catch (error) {
        console.error('Error: ', error.message);
    }
}

// Run the main function
generateGraphData();
