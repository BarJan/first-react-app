class MovieClass{

    constructor(plainObjectOrName, length, poster, director, mainActors){
        
        if(typeof plainObjectOrName === "object"){
            this.name = plainObjectOrName.name;
            this.length = plainObjectOrName.length;
            this.poster = plainObjectOrName.poster;
            this.director = plainObjectOrName.director;
            this.mainActors = plainObjectOrName.mainActors;
        }
        else{
            this.name = plainObjectOrName;
            this.length = length;
            this.poster = poster;
            this.director = director;
            this.mainActors = mainActors;
        }
    }

}

export default MovieClass;