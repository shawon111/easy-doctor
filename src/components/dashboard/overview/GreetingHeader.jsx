import { requireUser } from "@/lib/requireUser";

export async function GreetingHeader({ subtitle = "Here is what's happening with your practice today." }) {
  const user = await requireUser();
  const { name } = user;
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-1">
        Good Day, {name}
      </h2>
      <p className="text-base text-muted-foreground">{subtitle}</p>
    </div>
  );
}
