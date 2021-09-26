import React from 'react';
import './Header.css'

const Header = () =>
{
    return (
        <div className="header__container">
            {/* Header Top Start */}
            <div className="header py-3">
                <h1 className="text-center">মাকতাবাতুল মাদিনা প্রকাশনী</h1>
            </div>
            {/* Header Top End */}

            {/* Bottom */}
            <h2 className="text-center mt-3">ইসলামি বই পড়ুন, দ্বীনী জ্ঞান অর্জন করুন</h2>
            <h2 className="text-center">Total Page of Target Reading: 1000 Page</h2>
            {/* Botton End */}
        </div>
    );
};

export default Header;