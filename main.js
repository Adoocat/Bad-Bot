const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');

const client = new Discord.Client();

const eak = ["https://www.youtube.com/watch?v=rPgTYHNAYOA","https://www.youtube.com/watch?v=25uMO2v6hPw","https://www.youtube.com/watch?v=zOJSzZgEECo"]

const otuzBir =["Emir bunu beğendi", "Sjsjsjsjsjsj"]

const kisiler = ["Emir'e","Emre'ye","Tunç'a","Berke'ye","Barkın'a","Ege'ye","Kıvanç'a","Demirkan'a","Efe'ye"]

const isimler = ["Demirkan","Emre","Tunç","Berke","Yağmur","Emir","Barkın","Ege","Efe"]

const yaziTura = ["Yazı","Tura"];

const sakalar =["Bir espri patlatayım mı ? BUM sjsjs","Bi taksi çevirdim, hala dönüyo sjsjsjs","https://www.youtube.com/watch?v=CKK4sZ1ZTOs"]

const küfürler = ["Senin ben amk orospu çocuğu seni. pu babanın kemiklerini sikeyim orosğu çocuğu!!!","Ulan alagavatlı pezevenk senin çocuklarını sikeyim!!!","Orrrri bile seni siker amk pezevengi piç seni!!!","Senin gelmiş geçmiş bütün atalarını sikeyim!","Allahsız pezevenk!!"]

const objeler = ["Şu direk","Bu ağacın dalı"," O binanın paratoneri","Bu ağaç","Benim kalemimin ucu","Emrenin kolu","Berkenin kolu","Tuncun küçük s**i","Emrenin kafası","Kıvancın eli","Efenin kafası"]

const inekler = ["Emir Abim","Tunç The Third Impostor","Kivantara","Ori The Mori","Yamur"]

const prefix = '/';

client.once('ready', () => {
    console.log("Hazır ve Nazır!!!")

});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    else if(command === 'ori'){
        message.channel.send('```MİNİCİK ORRRİ```');
    }
    else if(command === 'love'){
        message.channel.send('#LAMİR')
    }
    else if(command === 'druz'){
        message.channel.send('https://www.youtube.com/channel/UCXnmlVlCodGihc5pargo76Q')
    }
    else if(command === 'eak'){
        const random = eak[Math.floor(Math.random() * eak.length)];
        message.channel.send(random)
    }
    else if(command === '31'){
        const randomOsBir = otuzBir[Math.floor(Math.random() * otuzBir.length)];
        message.channel.send(randomOsBir)
    }
    else if(command === 'mal'){
        message.channel.send("TUNÇ BAYA MAL AQ")
    }
    else if(command === 'möf'){
        const küfür = küfürler[Math.floor(Math.random() * küfürler.length)];
        message.channel.send(`||${küfür}||`)
    }
    else if(command === 'mizah'){
        const saka = sakalar[Math.floor(Math.random() * sakalar.length)];
        message.channel.send(saka)
    }
    else if(command === 'gir'){
        const sok = objeler[Math.floor(Math.random() * objeler.length)];
        const kisi = kisiler[Math.floor(Math.random() * objeler.length)];
        message.channel.send(`${sok} var ya ${kisi} girsin.`)
    }
    else if(command === 'inek'){
        const inek = inekler[Math.floor(Math.random() * inekler.length)];
        message.channel.send(`En inek kişi ${inek}.`)
    }
    else if(command === 'yamur'){
        message.channel.send("Amesan left the game.");
    }
    else if(command==='tanrı'){
        message.channel.send("Burda Demirkan The Engineer'den Başka Tanrı Görmüyorum!!")
    }
    else if(command === 'zar'){
        const zar1 = Math.floor(Math.random()* 6);
        const zar2 = Math.floor(Math.random()* 6);
        message.channel.send("**Zar 1:** " + zar1 +" **Zar 2:** " + zar2);
    }
    else if(command === 'hamsi'){
        message.channel.send('https://cdn.discordapp.com/attachments/776154786499526667/776155814372966450/s-862a5f8ee8d6d40c4b2ad6e9997628578b1d4718.png')
    }
    else if(command === 'coinflip'){
        const para = yaziTura[Math.floor(Math.random() * yaziTura.length)];
        message.channel.send(`${para} geldi.`)
    }
    else if(command === 'bot'){
        message.channel.send(`Ben Bad Bot!! Eğlence ve Rahatınızı Sağlamak İçin Babam Adoocat tarafından oluşturuldum. Bu arada /möf komutunu denemenizi öneririm :sweat_smile:`)
    }
    else if(command === 'kaybol'){
        const isim = isimler[Math.floor(Math.random()*isimler.length)];
        message.channel.send(`${isim} kaybol!`)
    }
    else if(command === 'help'){
        message.channel.send(
        `
        Bad Bot Komutlar
        /bot = Bot kendini tanıtır.
        /ping = pong!
        /ori = ORİYİ YÜKSELT.
        /love = Gerçek Aşk.
        /eak = Emir abim ile ilgili random video.
        /31 = Güldürmeyin beni aq sjsjs.
        /mal = İsmi lazım değil.
        /möf = Bunu dene.
        /mizah = Süper Espriler
        /gir = Sokmaya yarayan komut"
        /inek = Kim en inek ?
        /yamur = Alışılmış bir mesaj.
        /tanrı = Sunucunun biat ettiği kişiyi gösterir.
        /zar = Zar atan bir komut.
        /hamsi = Uy.
        /coinflip = Yazı Tura işte aq.
        /kaybol = Kaybedici
        `)
    }
    else{
        message.channel.send("!!!Hatalı Komut!!!")
    }
});

client.login('Nzc1OTYwODIzMTcxNTE0Mzc4.X6t71A.SIPk2tnDfS2Mp3sq7eaLoyTXRPo');