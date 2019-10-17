export default{
    savePrice: function(actualPrice, discount){
        return (actualPrice-(actualPrice * discount/100));
    },
}