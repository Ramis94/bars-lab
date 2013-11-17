/**
 * Результатом выполнения этих заданий будет набор функций-утилит
 * для работы со строками.
 */

/**
 * Задание 1. Создать функцию format, позволяющую форматировать строку.
 * В качестве первого параметра принимается строка-шаблон в форамте 'blah-blah {0}, blah {1}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {x}
 * в строке-шаблоне. Возможно здесь пригодятся регулярные выражения 
 * см. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * Если передаваемых параметров не хватает (см. пример ниже), то выбрасывается исключение
 * (для этого используйте след. код: throw new Error("Invalid arguments count")).
 *
 * @example
 * var txt = format('Hello, {0} {1}', 'JS', 'World'); // значение txt равно 'Hello, JS World'
 * var errorArgs = format('Hello, {0} {1}', 'JS'); // в консоли ошибка 'Error: Invalid arguments count'
 *
 * @param {String} token
 * Строка-шаблон.
 *
 * @param {Mixed...} values
 * Значения, которые заменят {0}, {1}... в строке-шаблоне.
 *
 * @return {String} отформатированная строка.
 */

 function format(token, values)
 {

 value1 = values.split(",");
 
 value2 = token.split(",");
 
 var index = 0;
  
  var newtoken = null;
  
  if(token.search("{0}")){
  return "without wildcards";
  }
  
 value3 =  val2[1].split(" ");
 
  
 while(index < value3.length)
 {
 var re = "{" index + "}" + "/g";
 
 if(newtoken === null)
 {
 newtoken = token.replace(re, value1[index]);
 }
 else
 { 
 newtoken = newtoken.replace(re, value1[index]);
 }
 index++;
 }
 return newtoken;
 
 }
 
 
 
/**
 * Задание 2. Создать функцию repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * Строка, которая будет повторяться.
 *
 * @param {Number} count
 * Количество повторений.
 *
 * @param {String} [sep]
 * Разделитель (необязательный параметр).
 *
 * @return {String} Строка с повотрениями.
 */

 function repeat(str, count, [sep])
 {
 var st = "";
 
 if([sep] != null)
 {
 var d = str + [sep];
 }
  else
  {
  str1 = str;
  }
 
 while(count > 0)
 {
    if(count == 1)
	{
    st = st + str;
    }
	else
	{
    st = st + str1;
    }
    count--;
 }
 return st;
}
 
 
/**
 * Задание 3. Создать функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} строка параметров.
 */

 function toGetParams(obj)
 {
 
 String getRequest = null;
 
 for(key in obj)
 {
 
 if(getRequest == null){
 getRequest =  key + "=" + obj[key];
 }
 else{
 getRequest = getRequest + "&" + key + "=" + obj[key];
 }
 }
 return getRequest;
 
 }
 
/**
 * Задание 4. Создать функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * Базовый url
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} сформированный url.
 */

 
 function formatUrl(url, obj)
 {
 
 var getRequest = null;
 
 url = url + "?";
 
 for(key in obj)
 {
 if(getRequest === null)
 {
 key + obj[key];
 }else
 {
 getRequest = getRequest + "&" + key + "=" + obj[key];
 }
 }
 
 return url + getRequest;
 }
 
/**
 * Задание 5. Создать функцию startsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента начинается со строки, переданной в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var start = startsWith('homework', 'home'); // true
 * var dontStart = startsWith('homework', 'house'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} prefix
 * Строка - кандидат на роль префикса.
 *
 * @return {Boolean} Результат проверки.
 */

 function startsWith(str, prefix)
 {
 if(str.indexOf(prefix) === 0)
 {
 return true;
 }
 else
 {
 return false;
 }
 }
 
 
 
/**
 * Задание 6. Создать функцию endsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента оканчивается на строку, переданную в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var end = endsWith('homework', 'work'); // true
 * var dontEnd = endsWith('homework', 'task'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} suffix
 * Строка - кандидат на роль суффикса.
 *
 * @return {Boolean} Результат проверки.
 */
 
 
 
 function(str, suffix)
 {
 var index = suffix.length;
 
 if(substring(str.length - index) === suffix){
 return true;
 }
 else
 {
return false;
 }
 }