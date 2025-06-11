
import { Puppy } from "../types";
import { PuppyCard } from "./PuppyCard";

export function PuppiesList({ puppies }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies.map((puppy) => (
        <PuppyCard key={puppy.id} puppy={puppy} />
      ))}
    </ul>
  );
}

