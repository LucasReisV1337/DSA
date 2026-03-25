# -*- coding: utf-8 -*-


def insert_ordered(values, value):
    index = 0
    while index < len(values) and values[index] < value:
        index += 1
    if index < len(values) and values[index] == value:
        return values
    values.insert(index, value)
    return values



def linear_search(values, target):
    for index, value in enumerate(values):
        if value == target:
            return index
    return -1



def binary_search(values, target):
    left = 0
    right = len(values) - 1
    while left <= right:
        middle = (left + right) // 2
        if values[middle] == target:
            return middle
        if target < values[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return -1



def remove_value(values, target):
    index = linear_search(values, target)
    if index != -1:
        del values[index]
    return values


if __name__ == "__main__":
    values = []
    for number in [4, 9, 1, 7, 3]:
        insert_ordered(values, number)
    print(values)
    print(linear_search(values, 7))
    print(binary_search(values, 7))
    print(remove_value(values, 4))
