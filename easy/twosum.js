function twoSum(nums, target) {
	const map = new Map();	// Create a Map to store numbers we've seen and their indices.

	// Iterate through each number in the array.
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];				// Current number
		const complement = target - num;	// Find the complement needed to reach the target.

		// Check if the complement already exists in the map.
		if (map.has(complement)) {
			// If found, return the indices: the one stored in the map and the current index.
			return [map.get(complement), i];
		}

		// Otherwise, store the current number and its index in the map.
		// This helps us check future numbers against the current one.
		map.set(num, i);
	}

	// If no pair is found, return an empty array.
	return [];
};

// Example usage
console.log(twoSum([2, 7, 11, 15], 9));	// Output: [0, 1]
console.log(twoSum([3, 4, 3], 6));		// Output: [0, 2]
console.log(twoSum([3, 3], 6));			// Output: [0, 1]
