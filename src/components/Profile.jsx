import React from "react";

const Profile = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="text-slate-900 text-md">Introduction</div>
                <p className="pt-8 text-gray-700">
                    Web designers to occupy the space which will later be filled
                    with 'real' content. This is required when, for example, the
                    final text is not yet available. Dummy text is also known as
                    'fill text'. Dummy texts have been in use by typesetters
                    since the 16th century.
                </p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="text-md">Appointment List</div>
                    <div className="text-md">Payment List</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-row">
                            <span>Icon</span>
                            <div className="flex flex-col">
                                <span>Cardiogram</span>
                                <span>Dr.Calvin Carlo</span>
                            </div>
                            <span>10 Dec</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <span>Cardiogram</span>
                                <span>Full bill paid</span>
                            </div>
                            <span>icon</span>
                        </div>
                    </div>
                </div>
			</div>
			<div className="flex flex-col">
				<h5>Contact us</h5>
				<div className="flex flex-row">
					<div className="flex flex-col">
						<span>icon</span>
						<p>New Messages</p>
						<span>Read more <span>icon</span></span>
					</div>
					<div className="flex flex-col">
						<span>icon</span>
						<p>Latest Proposals</p>
						<span>View more <span>icon</span></span>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Profile;
