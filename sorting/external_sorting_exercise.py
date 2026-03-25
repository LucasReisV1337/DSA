# -*- coding: utf-8 -*-

from heapq import heappush, heappop


def generate_runs(values, run_size):
    runs = []
    for start in range(0, len(values), run_size):
        run = sorted(values[start:start + run_size])
        runs.append(run)
    return runs



def merge_runs(runs):
    heap = []
    result = []
    positions = [0] * len(runs)

    for run_index, run in enumerate(runs):
        if run:
            heappush(heap, (run[0], run_index))

    while heap:
        value, run_index = heappop(heap)
        result.append(value)
        positions[run_index] += 1
        if positions[run_index] < len(runs[run_index]):
            next_value = runs[run_index][positions[run_index]]
            heappush(heap, (next_value, run_index))

    return result


if __name__ == "__main__":
    values = [18, 7, 3, 24, 15, 5, 20, 25, 16, 14]
    runs = generate_runs(values, 3)
    print(runs)
    print(merge_runs(runs))
