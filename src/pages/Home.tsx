import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Consultar contratos</h2>
      <form className="space-y-4">
        <Input placeholder="Digite seu CPF" />
        <Button type="submit">Consultar</Button>
      </form>
    </div>
  );
}
