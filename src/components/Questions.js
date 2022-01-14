import React, { Component } from 'react'

export class questions extends Component {
    constructor(props) {
        super(props)
        const { res } =  props;
        this.state = {res: res }
    }
    
    render() {
        return (
                <div className='flex flex-wrap p-4'>
                    <div className='px-6'>
                        <p className='rounded-full p-6 border-2 bg-red-800 text-white '>{`Pic ${this.state.res}`}</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-blue-600'>{`Iteams ${this.state.res}`}</h1>
                        <h1 className='text-xs '>Select one option</h1>

                        <div className="flex flex-wrap text-green-500">
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`} />
                                <span className="ml-2 text-sm">Option 1</span>
                            </label>
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`} />
                                <span className="ml-2 text-sm">Option 2</span>
                            </label>
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`}/>
                                <span className="ml-2 text-sm">Option 3</span>
                            </label>
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`}/>
                                <span className="ml-2 text-sm">Option 4</span>
                            </label>
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`}/>
                                <span className="ml-2 text-sm">Option 5</span>
                            </label>
                            <label className="flex items-center pr-8">
                                <input type="radio" name={`answer ${this.state.res}`}/>
                                <span className="ml-2 text-sm">Option 6</span>
                            </label>
                        </div>
                    </div>
                    
                </div>
        )
    }
}

export default questions;
