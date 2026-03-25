# -*- coding: utf-8 -*-


def build_signature(values, size=32):
    signature = 0
    for value in values:
        bit = hash(value) % size
        signature |= 1 << bit
    return signature



def maybe_contains(signature, values, size=32):
    candidate = build_signature(values, size)
    return (signature & candidate) == candidate


if __name__ == "__main__":
    signature = build_signature(["cargo", "dept", "salario"])
    print(bin(signature))
    print(maybe_contains(signature, ["cargo", "dept"]))
    print(maybe_contains(signature, ["cargo", "cidade"]))
