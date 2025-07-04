
import { Puppy } from "../types";
import { PuppyCard } from "./PuppyCard";
import { Dispatch, SetStateAction } from "react";

export function PuppiesList({ puppies, liked, setLiked }: {
	puppies: Puppy[];
	liked: Puppy["id"][];
	setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}) {
	return (
		<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{puppies.map((puppy) => (
				<PuppyCard key={puppy.id} puppy={puppy} liked={liked} setLiked={setLiked} />
			))}
		</ul>
	);
}