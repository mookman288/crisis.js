#crisis.js
##A library for websites that encounter individuals experiencing crisis

**Note:** This is a **proof of concept** library that is **not** intended for production environments. You, and your users 
agree not to hold this library, or its author, liable for its use. 

###Purpose

Crisis is an every day occurrence. It may be possible, for a few kb per page, to intervene and prevent a death, prevent abuse, 
or otherwise save a life. This library is a proof of concept to see if it's possible to build a system that can detect pain 
in users and help them wherever possible. 

###Notes

* Primary combination sets are also checked for an optional `s` at the end. That means `hurt` will also check for `hurts`. 
* The pop-up will not reactivate on that input regardless of whether the user says "OK" or "Cancel." 

###License
####The MIT License (MIT)

Copyright (c) 2016 PxO Ink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.