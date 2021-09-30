
import React, { Component } from 'react'
import classes from './Header.css';

class info extends Component {
    render() {
        return (
            <div>
                <marquee direction="up" height="400px" scrolldelay="50">
                    <b><pre id='pretag'>{`1. What is Adoption?
Adoption means the process through which the adopted child is 
permanently separated from his biological parents and becomes
the lawful child of the adoptive parents with all the rights, 
privileges and responsibilities that are attached to a 
biological child.
2. Who can be adopted?
An orphan, abandoned or surrendered (OAS) child who has been 
declared legally free for adoption by the Child Welfare 
Committee (CWC).
3. Who can adopt?
Prospective adoptive parents (PAP):- who are physically, mentally 
and emotionally stable, financially capable and who do not have 
any life threatening medical conditions are eligible to adopt.
4. What is the minimum age of parent to adopt?
The minimum age difference between the child and PAP/s shall not 
be less than twenty-five years.
Married
i)Married Couple with atleast two year of stable marital 
relationship.
ii)Both spouces must consent for adoption in case of a married 
couple.
iii)The composite age of the married couple does not exceed 
110years.
Single
i)Single person with or without biological or adoptive children 
can adopt provided they satisfy the following:(a) A single female 
can adopt a child of any gender.(b) A single male is not eligible 
to adopt a girl child.(c)Age of a single parent does not exceed 55 
years.(d)Must have less than four children unless they are adopting 
a child with special needs, a hardto-place child, a relative's 
child or a step-child.
`}</pre></b>
                </marquee></div>

        )
    }
}


export default info;
