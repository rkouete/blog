import React, { useState } from 'react'
import classes from './code-copy-btn.module.css';
import CheckBadgeIcon from '../icon/check-badge-icon';
import DocumentDuplicateIcon from '../icon/document-duplicate-icon';

function CodeCopyBtn({ children }) {
    const [copyOk, setCopyOk] = useState(false);

    const iconColor = copyOk ? '#0af20a' : '#ddd';
    const icon = copyOk ? <CheckBadgeIcon /> : <DocumentDuplicateIcon />;

    const handleClick = (e) => {
        navigator.clipboard.writeText(children.props.children);
        
        setCopyOk(true);
        setTimeout(() => {
            setCopyOk(false);
        }, 5000);
    }

    return (
        <span className={copyOk ? classes.codeCopyBtnOk : classes.codeCopyBtn} onClick={handleClick} style={{ color: iconColor }} >{icon}</span>

    )
}

export default CodeCopyBtn
