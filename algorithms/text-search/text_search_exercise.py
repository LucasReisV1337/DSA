# -*- coding: utf-8 -*-


def build_prefix(pattern):
    prefix = [0] * len(pattern)
    length = 0
    index = 1
    while index < len(pattern):
        if pattern[index] == pattern[length]:
            length += 1
            prefix[index] = length
            index += 1
        elif length > 0:
            length = prefix[length - 1]
        else:
            prefix[index] = 0
            index += 1
    return prefix



def kmp_search(text, pattern):
    if not pattern:
        return 0
    prefix = build_prefix(pattern)
    text_index = 0
    pattern_index = 0
    while text_index < len(text):
        if text[text_index] == pattern[pattern_index]:
            text_index += 1
            pattern_index += 1
            if pattern_index == len(pattern):
                return text_index - pattern_index
        elif pattern_index > 0:
            pattern_index = prefix[pattern_index - 1]
        else:
            text_index += 1
    return -1



def rabin_karp_search(text, pattern, base=256, modulo=101):
    if not pattern:
        return 0
    pattern_hash = 0
    window_hash = 0
    high_order = 1
    pattern_length = len(pattern)

    for _ in range(pattern_length - 1):
        high_order = (high_order * base) % modulo

    for index in range(pattern_length):
        pattern_hash = (base * pattern_hash + ord(pattern[index])) % modulo
        window_hash = (base * window_hash + ord(text[index])) % modulo

    for index in range(len(text) - pattern_length + 1):
        if pattern_hash == window_hash and text[index:index + pattern_length] == pattern:
            return index
        if index < len(text) - pattern_length:
            window_hash = (
                base * (window_hash - ord(text[index]) * high_order)
                + ord(text[index + pattern_length])
            ) % modulo
    return -1


if __name__ == "__main__":
    text = "ababcabcabababd"
    pattern = "ababd"
    print(kmp_search(text, pattern))
    print(rabin_karp_search(text, pattern))
