const Canvas = require("canvas");
const dummyValues = require('../../assets/dummyValues/LBdata.json');

module.exports = class Leaderboard {

    constructor() {
        this.Data = dummyValues.egNamesData;
        this.textColor = '#ffffff';
        this.backgroundImage = `${__dirname}/../../assets/img/LBImage.png`;
        this.addAvatar = false;
        // this.avatarGap = 0;
    }
    
    setData(value) {
        this.Data = value;
        return this;
    }
    
    setBackground(value) {
        this.backgroundImage = value;
        return this;
    }
    
    setTextColor(value) {
        this.textColor = value;
        return this;
    }

    setAvatars(value) {
        // if(value != true || value != false) return new Error('discord-canvas || addAvatars() has to be a boolean value. [True/False]');
        this.addAvatar = value;
        return this
    }
    

    async toAttachment() {
        // Create canvas
        const canvas = Canvas.createCanvas(950, 1285);
        const ctx = canvas.getContext("2d");
        let avatarGap = 0;

        let background = await Canvas.loadImage(this.backgroundImage);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Adding Entries
        ctx.font = '40px Lean';
        ctx.fillStyle = this.textColor;
        
        if(this.addAvatar == true){
            let gap = 0;
            let avatarGap = 50;
            for(let i=0; i<this.Data.length; i++){
                ctx.fillText(this.Data[i].data, 130 + avatarGap, (62 + gap));
                gap = gap + 132;
            }
            gap = 0;
            for(let i=0; i<this.Data.length; i++){
                ctx.beginPath();
                let avatar = await Canvas.loadImage(this.Data[i].icon);
                ctx.drawImage(avatar, 100, (15 + gap), 64, 64)
                gap = gap + 132
            }
            
        } else {
            let gap = 0;
            for(let i=0; i<this.Data.length; i++){
                ctx.fillText(this.Data[i].data, 100 + avatarGap, (62 + gap));
                gap = gap + 132;
            }
        }

        
        return canvas;
    }
};