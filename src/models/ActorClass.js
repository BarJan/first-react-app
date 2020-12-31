class ActorClass{

    constructor(plainObjectOrfname, lname, brday, image, imdbLnk){
        
        if(typeof plainObjectOrfname === "object"){
            this.fname = plainObjectOrfname.fname;
            this.lname = plainObjectOrfname.lname;
            this.brday = new Date(plainObjectOrfname.brday);
            this.image = plainObjectOrfname.image;
            this.imdbLnk = plainObjectOrfname.imdbLnk;
        }
        else{
            this.fname = plainObjectOrfname;
            this.lname = lname;
            this.brday = new Date(brday);
            this.image = image;
            this.imdbLnk = imdbLnk;
        }
    }

    Age (){
         const nowTime = new Date().getFullYear();
         return (nowTime-this.brday.getFullYear());
    }


}

export default ActorClass;