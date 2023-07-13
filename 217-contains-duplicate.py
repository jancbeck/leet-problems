

/**
 * @param {number[]} nums
 * @return {boolean}
 */
# FILEPATH: /Users/jan/Projects/leet-problems/217-contains-duplicate.py
# BEGIN: ed8c6549bwf9
def containsDuplicate(nums):
  for i in range(len(nums)):
    num = nums[i]
    for j in range(len(nums)):
      if num == nums[j] and i != j:
        return True
  return False
# END: ed8c6549bwf9
