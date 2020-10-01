function summ (nums) {
    let res = 0;
    for (i = 0; i < nums.length; i++) {
        res = res + nums[i];
    };
    return res;
};

summ([7, 13, 5, 1, 99]);
summ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
summ([11, 45, 2, 5, 4, 4]);