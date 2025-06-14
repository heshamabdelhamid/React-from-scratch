
import { Heart } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Puppy } from "../types";

export function LikeToggle({ puppyId, liked, setLiked }: {
    puppyId: Puppy["id"];
    liked: Puppy["id"][];
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}) {
    return (
        <button className="group"
            onClick={() => {
                if (liked.includes(puppyId)) {
                    setLiked(liked.filter(id => id !== puppyId));
                } else {
                    setLiked([...liked, puppyId]);
                }
            }}
        >
            <Heart className={
                liked.includes(puppyId)
                    ? "fill-pink-500 stroke-none"
                    : "stroke-slate-200 group-hover:stroke-slate-300"
            } />
        </button>
    );
}