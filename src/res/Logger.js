const styles = {
    success: 'background: #090; color: #fff; padding:5px;',
    warning: 'background: #ff0; color: #000; padding:5px;',
    error: 'background: #f00; color: #000; padding:5px;',
    inform: 'background: #009; color: #fff; padding:5px;',
    mark: 'background: #eee; font-weight: bold',
    incoming: 'background: #ccccff; padding:2px;',
    outgoing: 'background: #ccff99; padding:2px;',
    declined: 'background: #f07d7d; padding:2px;',
    internalOut: 'color: #7416a3; padding:2px; font-weight: bold',
    internalIn: 'color: #d16704; padding:2px; font-weight: bold',
    timestamp: 'background: #ccc; padding:2px; font-weight: bold; font-style: italic;'
};

const coloredPrefix = (prefix, type) => (text, data) => console.log(`%c${prefix}`, styles[type], text, data);


export default class {
    static incoming = coloredPrefix('[ <- ]', 'incoming');
    static outgoing = coloredPrefix('[ -> ]', 'incoming');

}
