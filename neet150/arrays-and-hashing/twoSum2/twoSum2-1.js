/**
 * Given a 1-indexed array of integers numbers
 * that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number.
 *
 * Let these two numbers be numbers[index1] and numbers[index2]
 * where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2,
 * added by one as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution.
 * You may not use the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 * Constraints:
 * • 2 <= numbers.length <= 3 * 10^4
 * • -1000 <= numbers[i] <= 1000
 * • numbers is sorted in ascending order.
 * • -1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum > target) {
      r -= 1;
    } else if (sum < target) {
      l += 1;
    } else return [l + 1, r + 1];
  }
};

// Example 1:
// The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// const input1 = [2, 7, 11, 15];
// const target1 = 9;
// const output1 = twoSum(input1, target1);
// console.log(output1); // [1,2]

// Example 2:
// The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// const input2 = [2, 3, 4];
// const target2 = 6;
// const output2 = twoSum(input2, target2);
// console.log(output2); // [1,3]

// Example 3:
// The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
const input3 = [-1, 0];
const target3 = -1;
const output3 = twoSum(input3, target3);
console.log(output3); // [1,2]

// Example 4:
// const input4 = [0, 0, 3, 4];
// const target4 = 0;
// const output4 = twoSum(input4, target4);
// console.log(output4); // [1,2]

// Example 5:
// The sum of 4 and 4 is 8. Therefore index1 = 4, index2 = 5. We return [4, 5].
// const input5 = [1, 2, 3, 4, 4, 9, 56, 90];
// const target5 = 8;
// const output5 = twoSum(input5, target5);
// console.log(output5); // [4,5]

// Example 6:
// const input6 = [
//   // repeated many times:
//   // -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
//   -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1,
// ];
// const target6 = 2;
// const output6 = twoSum(input6, target6);
// console.log(output6); // [29999, 30000]

// const input7 = [
//   1, 1, 1, 4, 4, 6, 10, 11, 11, 12, 14, 14, 14, 15, 15, 18, 18, 19, 19, 23, 26,
//   27, 31, 37, 37, 37, 38, 44, 46, 46, 51, 51, 53, 54, 60, 60, 63, 63, 64, 64,
//   67, 69, 70, 73, 73, 80, 84, 87, 87, 88, 89, 90, 90, 92, 92, 92, 93, 95, 98,
//   100, 100, 100, 101, 101, 108, 108, 108, 108, 113, 117, 117, 117, 119, 124,
//   124, 125, 125, 130, 130, 130, 130, 130, 132, 134, 134, 135, 135, 136, 139,
//   140, 140, 142, 142, 142, 143, 143, 143, 148, 156, 157, 159, 159, 161, 164,
//   164, 166, 166, 166, 166, 167, 169, 170, 170, 172, 172, 172, 173, 174, 175,
//   180, 187, 187, 187, 188, 188, 191, 192, 197, 198, 199, 199, 203, 205, 207,
//   208, 208, 210, 214, 214, 217, 221, 222, 225, 226, 227, 229, 235, 239, 245,
//   253, 255, 256, 258, 260, 261, 266, 268, 268, 270, 273, 280, 280, 281, 281,
//   282, 282, 288, 288, 291, 293, 293, 293, 295, 295, 295, 296, 296, 301, 303,
//   304, 305, 313, 314, 316, 317, 319, 321, 321, 321, 321, 324, 326, 326, 326,
//   331, 331, 331, 333, 334, 335, 336, 336, 340, 340, 340, 340, 340, 340, 342,
//   342, 343, 345, 345, 347, 347, 350, 350, 350, 350, 350, 352, 354, 354, 355,
//   355, 358, 358, 362, 362, 362, 362, 370, 370, 370, 372, 372, 372, 374, 376,
//   378, 379, 382, 383, 383, 383, 387, 388, 392, 395, 395, 396, 397, 399, 402,
//   402, 402, 404, 405, 408, 410, 410, 410, 411, 414, 414, 417, 418, 419, 419,
//   423, 423, 423, 423, 423, 426, 427, 428, 431, 431, 434, 434, 434, 436, 438,
//   438, 439, 440, 442, 444, 445, 448, 448, 448, 451, 452, 458, 458, 459, 459,
//   465, 465, 465, 465, 465, 466, 466, 467, 472, 473, 473, 476, 482, 482, 486,
//   486, 486, 486, 488, 488, 488, 492, 492, 494, 496, 496, 496, 497, 499, 499,
//   500, 500, 500, 500, 504, 504, 505, 507, 507, 509, 513, 514, 516, 516, 516,
//   517, 520, 520, 520, 522, 522, 523, 526, 526, 526, 528, 529, 529, 531, 531,
//   535, 535, 535, 536, 539, 539, 543, 543, 543, 543, 543, 543, 544, 545, 548,
//   548, 548, 552, 552, 554, 554, 556, 558, 560, 561, 561, 562, 563, 563, 564,
//   564, 566, 568, 568, 569, 570, 570, 570, 570, 572, 572, 572, 580, 583, 585,
//   588, 588, 588, 588, 590, 591, 592, 597, 597, 597, 599, 604, 604, 604, 606,
//   606, 607, 609, 609, 611, 611, 614, 617, 617, 617, 621, 621, 621, 627, 627,
//   627, 627, 629, 630, 630, 630, 631, 632, 632, 635, 635, 635, 635, 635, 635,
//   637, 637, 639, 640, 640, 644, 644, 646, 650, 650, 651, 653, 654, 662, 662,
//   662, 662, 664, 665, 670, 675, 675, 677, 681, 682, 685, 685, 687, 691, 695,
//   695, 696, 697, 698, 701, 701, 705, 705, 706, 706, 709, 709, 710, 711, 713,
//   717, 722, 723, 723, 723, 727, 729, 733, 734, 735, 736, 739, 743, 743, 743,
//   743, 743, 744, 744, 746, 748, 750, 750, 752, 752, 753, 753, 758, 758, 758,
//   761, 761, 764, 764, 764, 766, 766, 767, 769, 769, 771, 774, 776, 776, 777,
//   782, 785, 788, 788, 788, 791, 796, 796, 796, 796, 798, 798, 800, 800, 801,
//   801, 802, 802, 803, 806, 808, 808, 808, 811, 813, 813, 813, 814, 817, 817,
//   820, 820, 822, 822, 824, 826, 827, 827, 830, 833, 833, 833, 835, 835, 835,
//   838, 838, 843, 848, 854, 854, 854, 855, 855, 857, 861, 863, 863, 863, 864,
//   867, 868, 870, 871, 874, 874, 877, 879, 879, 879, 880, 880, 881, 882, 884,
//   884, 884, 884, 888, 893, 893, 895, 896, 899, 900, 900, 901, 904, 907, 909,
//   912, 913, 916, 916, 920, 922, 924, 926, 926, 927, 930, 931, 932, 932, 933,
//   934, 937, 938, 938, 940, 940, 942, 943, 943, 943, 949, 950, 951, 952, 952,
//   953, 953, 954, 958, 959, 961, 967, 969, 969, 973, 974, 974, 977, 978, 979,
//   982, 983, 984, 984, 985, 987, 987, 989, 990, 991, 995, 996, 997, 998,
// ];

// const target7 = 929;

// const output7 = twoSum(input7, target7);
// console.log(output7); // [134, 496]
