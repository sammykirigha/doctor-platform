<Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />,
                    <Route path="/dashboard" element={<Dashboard />} />,
                    <Route path="/appointment" element={<Appointment />} />,
                    <Route path="/blogs" element={<Blogs />} />,
                    <Route path="/components" element={<Components />} />,
                    <Route path="/apps/chat" element={<Chat />} />
                    <Route path="/apps/email" element={<Email />}>
                        <Route exact index element={<Inbox />} />
                        <Route exact path="starred" element={<Starred />} />
                        <Route exact path="spam" element={<Spam />} />
                        <Route exact path="sent" element={<Sent />} />
                        <Route exact path="drafts" element={<Drafts />} />
                        <Route exact path="delete" element={<Delete />} />
                        <Route exact path="notes" element={<Notes />} />
                    </Route>
                    <Route path="/apps/calendar" element={<Calendar />} />
                    <Route
                        path="/patients/all-patients"
                        element={<Patients />}
                    />
                    <Route
                        path="/patients/add-patient"
                        element={<AddPatient />}
                    />
                    <Route
                        path="/patients/profile"
                        element={<PatientsProfile />}
                    >
                        <Route exact path="profile" element={<Profile />} />
                        <Route
                            exact
                            path="profile-settings"
                            element={<ProfileSettings />}
                        />
                    </Route>
                    <Route path="/doctors/all-doctors" element={<Doctors />} />,
                    <Route path="/doctors/add-doctor" element={<AddDoctor />} />
                    ,
                    <Route path="/doctors/profile" element={<DoctorsProfile />}>
                        <Route exact index element={<Overview />} />
                        <Route
                            exact
                            path="experience"
                            element={<Experience />}
                        />
                        <Route exact path="reviews" element={<Review />} />
                        <Route
                            exact
                            path="time-table"
                            element={<TimeTable />}
                        />
                        <Route exact path="settings" element={<Settings />} />
                    </Route>
                    ,
                    <Route path="/pages" element={<Pages />} />,
                    <Route path="/pharmacy" element={<Pharmacy />} />,
                </Routes>
            </Layout>