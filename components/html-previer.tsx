'use client'

import React from 'react'
import { useState, ChangeEvent } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import {predefinedHtml} from './predefined'



const HTMLPreviewer = () => {

    //states

    const [htmlCode, setHtmlCode] = useState<string>("")
    const [prewiewHtml, setPreviewHtml] = useState<string>("")

    // methods

    const handlePreview = (): void => {
        setPreviewHtml(htmlCode);
    }

    const handlePasteHtml = (): void => {
        setHtmlCode(predefinedHtml)
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setHtmlCode(e.target.value)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
          <div className="w-full max-w-3xl p-8 rounded-lg shadow-md bg-white">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
              HTML Previewer
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Enter your HTML code below and see the preview instantly.
            </p>
            <div className="grid gap-6">
              <Textarea
                value={htmlCode}
                onChange={handleChange}
                placeholder="Enter your HTML code here..."
                className="p-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={10}
              />
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <Button
                    onClick={handlePreview}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                  >
                    Generate Preview
                  </Button>
                  <Button
                    onClick={handlePasteHtml}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                  >
                    Paste HTML
                  </Button>
                </div>
              </div>
              <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-sm text-gray-800">
                <div dangerouslySetInnerHTML={{ __html: prewiewHtml }} />
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default HTMLPreviewer