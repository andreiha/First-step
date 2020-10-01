function target (nums, targ) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {     
            if (i != j && nums[i] + nums [j] === targ) {
                return `${nums[i]}, ${nums[j]}`;
            };
        };
    };
};

target (nums = [4, 2, 7, 11, 15], targ = 9);
target (nums = [26, 3, 2, 4, 7, 1], target = 6);
target (nums = [3, 3, 4, 5, 9], target = 6);