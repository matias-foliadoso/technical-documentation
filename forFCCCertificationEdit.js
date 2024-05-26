const test1 = () => {
    const el = document.getElementById('main-doc')
    return (!!el)
}
const test2 = () => {
    const els = document.querySelectorAll('#main-doc section')
    return (els.length >= 5)
}
const test3 = () => {
    const els = document.querySelectorAll('.main-section')
    els.forEach(el => {
        if (el.tagName !== 'SECTION') return (false)
    })
    return (els.length > 0)
}
const test4 = () => {
    const els = document.querySelectorAll('#main-doc .main-section')
    return (els.length >= 5)
}
const test5 = () => {
    const els = document.querySelectorAll('.main-section')
    els.forEach(el => {
        if (el.firstElementChild?.tagName !== 'HEADER') return (false)
    })
    return (els.length > 0)
}
const test6 = () => {
    const els = document.querySelectorAll('header')
    els.forEach(el => {
        if (el.innerText?.length <= 0) return (false)
    })
    return (els.length > 0)

}
const test7 = () => {
    const els = document.querySelectorAll('.main-section')
    els.forEach(el => {
        if (!el.id || el.id === '') return (false)
    })
    return (els.length > 0)
}
const test8 = () => {
    const els = document.querySelectorAll('.main-section')
    els.forEach(el => {
        const text = el.firstElementChild?.innerText?.replaceAll(' ', '_')
        if (el.id?.toUpperCase() !== text?.toUpperCase()) return (false)
    })
    return (els.length > 0)
}
const test9 = () => {
    const els = document.querySelectorAll('.main-section p')
    return (els.length >= 10)
}
const test10 = () => {
    const els = document.querySelectorAll('.main-section code')
    return (els.length >= 5)
}
const test11 = () => {
    const els = document.querySelectorAll('.main-section li')
    return (els.length >= 5)
}
const test12 = () => {
    const el = document.getElementById('navbar')
    return (!!el && el.tagName === 'NAV')
}
const test13 = () => {
    const els = document.querySelectorAll('#navbar header')
    return (els.length === 1)
}
const test14 = () => {
    const els = document.querySelectorAll('a.nav-link')
    return (els.length >= 1)
}
const test15 = () => {
    const els = document.querySelectorAll('.nav-link')
    els.forEach(el => {
        if (el.tagName !== 'A') return (false)
    })
    return (els.length > 0)
}
const test16 = () => {
    const els1 = document.querySelectorAll('.nav-link')
    const els2 = document.querySelectorAll('#navbar .nav-link')
    return (els2.length > 0 && els1.length === els2.length)

}
const test17 = () => {
    const els1 = document.querySelectorAll('.main-section')
    const els2 = document.querySelectorAll('.nav-link')
    return (els1.length > 0 && els2.length > 0 && els1.length === els2.length)

}
const test18 = () => {
    const navLinks = document.querySelectorAll('#navbar a.nav-link');
    const header = document.querySelector('#navbar header');
    navLinks.forEach((navLink) => {
        if (
            (
                header.compareDocumentPosition(navLink) &
                Node.DOCUMENT_POSITION_PRECEDING
            )
        ) return (false)
    });
    return (!!header)
}
const test19 = () => {
    const headerText = Array.from(document.querySelectorAll('.main-section')).map(el =>
        el.firstElementChild?.innerText?.trim().toUpperCase()
    )
    const linkText = Array.from(document.querySelectorAll('.nav-link')).map(el =>
        el.innerText?.trim().toUpperCase()
    )
    const remainder = headerText.filter(str => linkText.indexOf(str) === -1)
    return (headerText.length > 0 && headerText.length > 0 && remainder.length === 0)
}
const test20 = () => {
    const hrefValues = Array.from(document.querySelectorAll('.nav-link')).map(el => el.getAttribute('href'))
    const mainSectionIDs = Array.from(document.querySelectorAll('.main-section')).map(el => el.id)
    const missingHrefValues = mainSectionIDs.filter(str => hrefValues.indexOf('#' + str) === -1)
    return (hrefValues.length > 0 && mainSectionIDs.length > 0 && missingHrefValues.length === 0)

}
const test21 = () => {
    const el = document.getElementById('navbar')
    const left1 = el?.offsetLeft
    const left2 = el?.offsetLeft

    return (!!el && left1 >= -15 && left1 <= 15 && left2 >= -15 && left2 <= 15)
}
const test22 = () => {
    const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
    const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
    return (cssCheck.length > 0 || htmlSourceAttr.length > 0);
}

const runTests = () => {
    const tests = [
        test1,
        test2,
        test3,
        test4,
        test5,
        test6,
        test7,
        test8,
        test9,
        test10,
        test11,
        test12,
        test13,
        test14,
        test15,
        test16,
        test17,
        test18,
        test19,
        test20,
        test21,
        // test22
    ]
    tests.forEach(test => {
        if (!test()) {
            console.log(test)
        }
    })
}

const topicsToRemove = document.querySelectorAll('.topics > li')
Array.from(topicsToRemove).slice(1).forEach(topic => {
    topic.remove()
})

const sectionsToRemove = document.querySelectorAll('.sections > li')
Array.from(sectionsToRemove).slice(2).forEach(section => {
    section.remove()
})

const avoidRemove = [
    'topic-1-section-1',
    'topic-1-section-2',
    'topic-1-section-1-page-1',
    'topic-1-section-1-page-3',
    'topic-1-section-1-page-3.1',
    'topic-1-section-2-page-2',
    'topic-1-section-2-page-2.2',
    'topic-1-section-2-page-2.2.1'
]

const treesToRemove = document.querySelectorAll('.trees > section')
treesToRemove.forEach(tree => {
    if (!avoidRemove.includes(tree.dataset.reaction)) {
        tree.remove()
    }
})

const treeButtonsToRemove = document.querySelectorAll('.trees > section > ul button')
treeButtonsToRemove.forEach(button => {
    if (!avoidRemove.includes(button.dataset.action)) {
        button.parentElement.remove()
    }
})

const pagesToRemove = document.querySelectorAll('.pages > section')
pagesToRemove.forEach(page => {
    if (!avoidRemove.includes(page.dataset.reaction)) {
        page.remove()
    }
})

const headingsToRemove = document.querySelectorAll('.headings > section')
headingsToRemove.forEach(heading => {
    if (!avoidRemove.includes(heading.dataset.reaction)) {
        heading.remove()
    }
})

const main = document.querySelector('main')
main.setAttribute('id', 'main-doc')

const sections = document.querySelectorAll('main > section')
sections.forEach(section => {
    section.classList.add('main-section')
    section.setAttribute('id', section.children[0].textContent.replaceAll(' ', '_').toLowerCase())
})

const trees = document.querySelector('.trees')
trees.setAttribute('id', 'navbar')

const treesButtons = trees.querySelectorAll('button:not(.close)')
treesButtons.forEach(treeButton => {
    const a = document.createElement('a')
    a.classList = treeButton.classList
    a.classList.add('nav-link')

    console.log('here', treeButton.dataset.action)

    const section = document.querySelector(`[data-reaction="${treeButton.dataset.action}"]`)
    a.setAttribute('href', `#${section.getAttribute('id')}`)

    a.textContent = treeButton.textContent
    a.dataset.action = treeButton.dataset.action
    treeButton.replaceWith(a)
})

runTests()
console.log(document.querySelector('html').innerHTML)