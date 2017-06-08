const express = require('express');
const jade=require('jade');
const fs=require('fs');
const app=express();

app.get('/',(req,res)=>{
	res.send('<h2>접속주소 맨뒤에/sen 또는 /act를 .. </h2>');
});


app.get('/sen',(req,res)=>{
	res.send('<h2> sensor입니다.</h2>');
});

app.get('/act',(req,res)=>{
	console.log("actuator (led) 호출");
	fs.readFile('test.jade','utf8',(error,data)=>{
	const fn=jade.compile(data);
	res.send(fn({name:'myname'}));
	
	
	});
});

app.get('/act/1',(req,res)=>{
	console.log("led ON 호");
	res.redirect('/act');
});

app.get('/act/0',(req,res)=>{
	console.log("led OFF 호출");
	res.redirect('/act');
});
app.get('/act/sense_fire',(req,res)=>{
        console.log("actuator (led) 호출");
        fs.readFile('sense_fire.jade','utf8',(error,data)=>{
        const fn=jade.compile(data);
        res.send(fn({name:'myname'}));


        });
});
app.get('/act/instrusion_Detection',(req,res)=>{
        console.log("actuator (led) 호출");
        fs.readFile('instrusion_Detection.jade','utf8',(error,data)=>{
        const fn=jade.compile(data);
        res.send(fn({name:'myname'}));


        });
});
app.get('/act/setting',(req,res)=>{
        console.log("actuator (led) 호출");
        fs.readFile('setting.jade','utf8',(error,data)=>{
        const fn=jade.compile(data);
        res.send(fn({name:'myname'}));


        });
});

app.listen(60001,()=>{
	console.log("웹서핑실행중(http://192.168.0.4:60001");
	console.log("http://IP주소:60001/act  또는");
	console.log("http://IP주소:60001/sen");
});
