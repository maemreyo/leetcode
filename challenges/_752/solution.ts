export class Queue {
    queue: any[];

    constructor() {
        this.queue = new Array(0);
    }

    enqueue(value: any) {
        this.queue.push(value);
        return this.queue;
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }

    len() {
        return this.queue.length;
    }
}

const isTarget = (sequence: string, target: string): boolean => target === sequence;

const getNextSequences = (curSeq: string, sequences: string[] = []): string[] => {
    for (let index = 0; index < curSeq.length; index++) {
        sequences.push(
            curSeq.slice(0, index) + ((+curSeq[index] + 1) % 10).toString() + curSeq.slice(index + 1),
        );
        sequences.push(
            curSeq.slice(0, index) + ((+curSeq[index] + 9) % 10).toString() + curSeq.slice(index + 1),
        );
    }

    return sequences;
}

export const openLock = (deadends: string[], target: string): number => {
    const queue = new Queue();
    const checked = new Set<string>();
    const _deadends = new Set<string>(deadends);

    queue.enqueue(['0000', 0]);

    while (queue.len()) {
        let guessSeq = queue.dequeue();

        if (_deadends.has(guessSeq[0])) continue;

        if (isTarget(guessSeq[0], target)) return guessSeq[1];

        for (let seq of getNextSequences(guessSeq[0])) {
            if (checked.has(seq)) continue;
            checked.add(seq);
            queue.enqueue([seq, guessSeq[1] + 1]);
        }
    }

    return -1;
};
