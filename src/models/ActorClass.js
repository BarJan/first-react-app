class ActorClass{

    constructor(fname, lname, brday, image, imdbLnk){
        this.fname = fname;
        this.lname = lname;
        this.brday = new Date(brday);
        this.image = image;
        this.imdbLnk = imdbLnk;
    }

    Age (){
         const nowTime = new Date().getFullYear();
         return (nowTime-this.brday.getFullYear());
    }


}

export default ActorClass;