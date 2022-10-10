import { TreeNode as Node } from "./solution";

export const tree = new Node(
    5,
    new Node(
        4,
        new Node(
            11,
            new Node(7),
            new Node(2)
        ),
        null
    ),
    new Node(
        8,
        new Node(13),
        new Node(
            4,
            null,
            new Node(1)
        )
    )
);
