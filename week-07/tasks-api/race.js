async function main() {
  const url = "http://localhost:3000/tasks";

  const resBefore = await fetch(url);
  const tasksBefore = await resBefore.json();
  console.log(`Tasks before: ${tasksBefore.length}`);

  const requests = Array.from({ length: 10 }).map((_, i) =>
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `Race task ${i + 1}`, projectId: 1 }),
    }),
  );

  await Promise.all(requests);

  const resAfter = await fetch(url);
  const tasksAfter = await resAfter.json();
  const added = tasksAfter.length - tasksBefore.length;

  console.log(`Tasks after: ${tasksAfter.length}`);
  console.log(`Result: ${added} out of 10 survived!`);
}

main().catch(console.error);
