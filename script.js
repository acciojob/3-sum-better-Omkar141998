function threeSum(arr, target) {
// write your code here
  arr.sort((a,b)=> a - b)//sort the array in non-decresing order
	let closeSum = infinity;
	for(let i=0;i<arr.length-2;i++){
		let j= i+1;
		let k = arr.length - 1;
		while(j < k){
			const sum = arr[i] + arr[j] + arr[k];
			if(Math.abs(sum - target) < Math.abs(closeSum - target)){
				closeSum = sum;
			}
			if(sum < target){
				j++
			}else{
				k--
			}
		}
	}
	return closeSum;
}

module.exports = threeSum;
