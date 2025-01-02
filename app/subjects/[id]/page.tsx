import { subjects } from "@/libs";
export default function SubjectPrompts({ params }: { params: { id: string } }) {
  const { id } = params;

  // Find the subject by ID
  const subject = subjects.find((subject) => subject.id === parseInt(id));

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{subject.title}</h1>
      <h2 className="text-lg font-semibold mb-2">Prompts:</h2>
      <ul className="space-y-3">
        {subject.prompts.map((prompt) => (
          <li key={prompt.id} className="p-3 border rounded shadow">
            <p className="text-gray-800">{prompt.body}</p>
            <p className="text-sm text-gray-500">
              Created At: {prompt.createdAt.toLocaleDateString()}
            </p>
            <p
              className={`text-sm ${
                prompt.status === "completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              Status: {prompt.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
