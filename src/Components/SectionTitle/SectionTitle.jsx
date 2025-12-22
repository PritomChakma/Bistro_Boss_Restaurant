
const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div className="text-center w-3/12 mx-auto my-10">
            <p className="text-[#D99904] mb-4">--- {subHeading} ---</p>
            <h2 className="uppercase  border-gray-600 border-y-2 py-4 font-semibold">{Heading}</h2>
        </div>
    );
};

export default SectionTitle;