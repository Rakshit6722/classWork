const customIterable = {
    data:[10,20,30],
    [Symbol.iterator](){
        let index = 0;
        const self = this;
        return{
            next(){
                if(index < self.data.length){
                    return {value:self.data[index++],done:false}
                }else{
                    return {done:true}
                }
            }
        }
    }
}

for(const value of customIterable){
    console.log(value)
}