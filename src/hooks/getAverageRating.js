
export const getAveragerRating  = reviews =>{
    if(reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review)=>{
        return sum + review.rating;
    }, 0)
    return totalRating / reviews.length;
}