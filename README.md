# **MinSG**
#### **`(mini snippet generator)`**

## **The Rationale**

```
I'm learning React on some web Course.
The Code Is repetetive.

I made some vsCode JavaScript Snippets.
But...I still have to Create The Directories & Folders myself. or event just creating extra folders or removing entire components or moving them around.

So...I decided to make a little tool to help my lazyness go unbothered.

It's a work in progress. be gentle I'm just a one man team.
```

## **How does it work ?**

### **Install Globally** `(it's a CLI not a dependency)`

```npm i -g minsg```


### **Commands**

```html
 minsg <action> <type> <path>
```

### **Action Types**
```javascript
  1. g - generate.
  2. mv - move/rename.
  3. rm - remove.
```
#### ``(Some Kinks in the code)``

```
the `rm` function still has some kinks. 
to remove a folder with contents use : `folder_name/`.

the 'mv' function needs you to specify a target path & a destination path as well as the `filename` at the end of each path you specify.
since is uses NodeJS's underlying `fs.rename` function - you can just as well rename a file/folder in the same manner.

the `g` function has a bug - if you try to name the component or a folder in the path with the same name as an existing folder somewhere in the app it will bug out (it sends an error message. but still generates the file - empty...)
```

### **Component Types**
```
  1. cc - Class Based Components.
  2. fc - Functional Components.
  3. f - Files (Directories).
```

### **Path Types**
```
  1. <component> - Standalone.
  2. /<file>/.../<file>/<component> - Nested
```

## **TODO**

```
1. Fix bugs in all 3 functions.
2. Add Web Components API Boilerplate components.
3. Add StencilJS Boilerplate components.
4. Add Express boilerplate porject (full MVP folder stuctrue).
```