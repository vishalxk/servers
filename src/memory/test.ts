import { createEntities, createRelations, addObservations, readGraph, searchNodes, openNodes } from './index';

async function testMemoryServer() {
  // Test 1: Create Entities
  const entities = [
    {
      name: "John_Smith",
      entityType: "person",
      observations: ["Speaks fluent Spanish", "Works in tech"]
    },
    {
      name: "Anthropic",
      entityType: "organization",
      observations: ["AI research company"]
    }
  ];
  
  console.log("Creating entities...");
  await createEntities({ entities });

  // Test 2: Create Relations
  const relations = [
    {
      from: "John_Smith",
      to: "Anthropic",
      relationType: "works_at"
    }
  ];
  
  console.log("Creating relations...");
  await createRelations({ relations });

  // Test 3: Add Observations
  const newObservations = {
    entityName: "John_Smith",
    contents: ["Enjoys morning coffee", "Graduated in 2019"]
  };
  
  console.log("Adding observations...");
  await addObservations({ observations: [newObservations] });

  // Test 4: Read Graph
  console.log("Reading entire graph...");
  const graph = await readGraph({});
  console.log(JSON.stringify(graph, null, 2));

  // Test 5: Search Nodes
  console.log("Searching for 'Spanish'...");
  const searchResults = await searchNodes({ query: "Spanish" });
  console.log(JSON.stringify(searchResults, null, 2));

  // Test 6: Open Specific Nodes
  console.log("Opening specific nodes...");
  const nodes = await openNodes({ names: ["John_Smith", "Anthropic"] });
  console.log(JSON.stringify(nodes, null, 2));
}

testMemoryServer().catch(console.error);