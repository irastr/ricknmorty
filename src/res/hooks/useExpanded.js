import {useCallback, useMemo, useReducer, useState} from 'react'
import {LayoutAnimation} from 'react-native'


export default function useExpanded (initialExpanded = false) {
    const [expanded, setExpanded] = useState(initialExpanded);
    //Function is created only on first mount, all another renders do not recreate function reference
    const toggle = useCallback(
        () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(prevExpanded => !prevExpanded)
        },
        []
    );
    const [resetDep, setResetDep] = useState(0);
    const reset = useCallback(() => {
        //perform actual reset
        setExpanded(initialExpanded);
        setResetDep(resetDep => resetDep + 1 )
        //written for next usage:
        // const {resetDep} = useExpanded(false);
        // useEffectAfterMount(()=> console.log('do something after reset'), [resetDep])
    }, [initialExpanded]);
    return useMemo(() => ({ expanded, toggle, reset, resetDep }), [expanded, toggle, reset, resetDep]);
}

//State reducer pattern

//before we make any internal state update, we send our proposed changes over to the user.
// If the user is okay with the changes, we go ahead and update state with our proposed changes.
// If they need to override a state change, they can do that as well.

//Reducer - is a function that receives state and action and return new state.

const internalReducer = (state, action) => {
    switch(action.type) {
        case useExpandedWithReducer.types.toggleExpand:
            return {
                ...state,
                expanded: !state.expanded
            };
        case useExpandedWithReducer.types.reset:
            return {
                ...state,
                expanded: action.payload
            };
            default: throw new Error(`Action type ${action.type} not handled`)
    }
};



export function useExpandedWithReducer (initialExpanded = false, userReducer = (state, action) => action.internalChanges) {
    const initialState = {expanded: initialExpanded};

    const resolveChangesReducer = (currentInternalState, action) => {
        const internalChanges = internalReducer(currentInternalState, action);
        return userReducer(currentInternalState, {...action, internalChanges});
    };

    // const [expanded, setExpanded] = useState(initialExpanded);
    const [{expanded}, setExpanded] = useReducer(resolveChangesReducer, initialState);
    const toggle = useCallback(
        () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded({type: useExpandedWithReducer.types.toggleExpand})
        },
        []
    );
    const [resetDep, setResetDep] = useState(0);
    const reset = useCallback(() => {
        // setExpanded(initialExpanded);
        setExpanded({
            type: useExpandedWithReducer.types.reset,
            payload: initialExpanded
        });
        setResetDep(resetDep => resetDep + 1 )
    }, [initialExpanded]);
    return useMemo(() => ({ expanded, toggle, reset, resetDep }), [expanded, toggle, reset, resetDep]);
}

useExpandedWithReducer.types = {
    toggleExpand: 'EXPAND',
    reset: 'RESET'
};





//Call functions in sequence
const sayAfternoon = (name) => {
    return  name + 'afternoon'
};
const sayMorning = (name) => {
    return name + 'morning'
};
// const callFuncInSequence = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));
//The above equals:
const callFuncInSequence = (...fns) => {
    return function (arg) {
        return fns.map(fn => fn(arg))
    }
};
// const arr = ['j', 'k'];
// console.log(arr.forEach(i => i), 'array');
const makeCall = callFuncInSequence(sayAfternoon, sayMorning);
console.log(makeCall('Good'), 'makeCallRes');
