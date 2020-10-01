function duplicate (nums) {
    nums.sort();
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return(nums[i]);
        };
    };
};

duplicate([1, 3, 4, 2, 2]);
duplicate([3, 1, 3, 4, 2, true]);
duplicate([9, 4, 77, 5, 1, 12, 'qwerty', 66,4]);