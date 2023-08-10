const calMedian = (array) => {
    const copy = [...array].sort((a, b) => a - b);
    const midpoint = Math.floor(array.length / 2);
    const median = array.length % 2 === 1 ?
        copy[midpoint] :
        (copy[midpoint - 1] + copy[midpoint]) / 2;
    return median;
}

export default calMedian;