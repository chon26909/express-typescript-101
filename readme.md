## Typescript 101 by HiChon

### Craete Folder

```
mkdir typescript-101 && cd typescript-101
```

### Init Project

```
npm init -y
```

### Install typescript

```
npm install -D typescript ts-node
```

> --save-dev หรือ -D
> แพ็กเกจจะปรากฎใน devDependencies ในไฟล์ package.json
> การใช้ :
> เพื่อบันทึกแพ็กเกจที่จำเป็นต่อการพัฒนาแอปพลิเคชั่น หรือเพื่อใช้เฉพาะใน develop environment เท่านั้น เช่น แพ็กเกจที่ใช้สำหรับทำการทดสอบ (unit test) หรือแพ็กเกจสำหรับการลดขนาดหรือคอมไพล์ไฟล์ เป็นต้น

### Init Typescript config

```
npx tsc --init
```

edit file tsconfig.json

> "target": "ES2022"
>
> "rootDir": "./src"
>
> "outDir": "./dist"

### Install nodemon

```
npm install -D nodemon
```

create file nodemon.json at root directory

```
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./src/index.ts"
}
```

edit file package.json

>

```
"scripts": {
  "dev": "nodemon",
  "build": "tsc --project ./"
},
```

### Create code

create file ./src/index.ts

```
console.log('Hello world!')
```

### Run code

```
npm run dev
```
