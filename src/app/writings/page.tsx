import { Card } from "@/components/ui/card";

export default function Writings() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">My Writings</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Article 1</h3>
          <p>Short description of Article 1</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Article 2</h3>
          <p>Short description of Article 2</p>
        </Card>
        {/* Add more article cards as needed */}
      </div>
    </main>
  );
}