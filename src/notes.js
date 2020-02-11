//Отличие useMemo, React.memo и useCallback
//React.memo: аналолично PureComponent в классовом компоненте, но сравнивает только пропсы между рендерами(prevProps, nextProps). Можно передать вторым аргументом коллбек, который сделает кастомное сравнение
//Both React.useMemo and React.useCallback receives a function as its first argument and a dependencies array as the second one.
// The hook will return a new value only when one of the dependencies value changes (referential equality).
// The main difference is that React.useMemo will call the fooFunction and return its result while React.useCallback will return the fooFunction without calling it.

//Если метод написан как стрелочная функция - каждый рендер будет создавать новую ссылку и если она пробрасывает как пропс в дочерний компонент - это будет вызывать ререндер.
//Это можно оптимизировать с помощью useCallback - возвращать новую функцию только тогда , когда поменялось определенное значение

//useMemo можно использовать в случаях, когда у нас в копоненте есть функция, которая делает много вычесление. с useMemo она будет вызываться лишь в определенных случаях

// через конструктор, потому что в обратном случае, после мутации ссылка все равно будет та же и рендера не произойдет
