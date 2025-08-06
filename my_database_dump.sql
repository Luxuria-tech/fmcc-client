--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-08-04 19:57:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 24577)
-- Name: blogs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title character varying(120) NOT NULL,
    author character varying(80) NOT NULL,
    date date NOT NULL,
    description text NOT NULL,
    image_url text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 217 (class 1259 OID 24576)
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4848 (class 0 OID 0)
-- Dependencies: 217
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- TOC entry 220 (class 1259 OID 24588)
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    name character varying(80),
    email character varying(120) NOT NULL,
    phone character varying(30),
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 219 (class 1259 OID 24587)
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4849 (class 0 OID 0)
-- Dependencies: 219
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- TOC entry 222 (class 1259 OID 24598)
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying(120) NOT NULL,
    date date NOT NULL,
    description text NOT NULL,
    location character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 221 (class 1259 OID 24597)
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4850 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- TOC entry 226 (class 1259 OID 24621)
-- Name: notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notifications (
    id integer NOT NULL,
    title character varying(120) NOT NULL,
    date date NOT NULL,
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 225 (class 1259 OID 24620)
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4851 (class 0 OID 0)
-- Dependencies: 225
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;


--
-- TOC entry 224 (class 1259 OID 24609)
-- Name: payments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payments (
    id integer NOT NULL,
    reference uuid,
    nkwa_ref character varying(120),
    full_name character varying(120) NOT NULL,
    momo_number character varying(20) NOT NULL,
    amount numeric(12,2) NOT NULL,
    status character varying(20) DEFAULT 'PENDING'::character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 223 (class 1259 OID 24608)
-- Name: payments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4852 (class 0 OID 0)
-- Dependencies: 223
-- Name: payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payments_id_seq OWNED BY public.payments.id;


--
-- TOC entry 4661 (class 2604 OID 24580)
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- TOC entry 4664 (class 2604 OID 24591)
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- TOC entry 4666 (class 2604 OID 24601)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- TOC entry 4673 (class 2604 OID 24624)
-- Name: notifications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);


--
-- TOC entry 4669 (class 2604 OID 24612)
-- Name: payments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payments ALTER COLUMN id SET DEFAULT nextval('public.payments_id_seq'::regclass);


--
-- TOC entry 4834 (class 0 OID 24577)
-- Dependencies: 218
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.blogs (id, title, author, date, description, image_url, created_at, updated_at) FROM stdin;
5	Reviving Culture Through Youth	Anita  N Moka	2025-06-15	In a bid to preserve Fako's rich heritage,FMCC recently launched a bootcamp focused on traditional dance ,story telling and crafts. The week long event saw participants from over 200 students across fako. Elders guided the youth through ancestral songs , dances like Marley, cha cha, and hands on craft making. the innitiative aims to create a bridge between generations , empowering the next with cultural identity	/uploads/1754245155794.JPG	2025-08-03 11:19:16.052819	2025-08-03 11:19:16.052819
6	From Soil to Soul	Ebang Mambo	2025-07-25	FMCC'S Traditional Farming festival, was held with grandeur , showcasing the ancestral farming tools, seed rituals , and crop dances used by the bakweri people. Farmers from Tole,Likombe and muyuka exhibited native vegetables and herbs . "This festival is a celebration of nature and community",said chief Elumba .With over 1000 attendees, it blended agriculture with culture in a colorful tribute to Fako.s green legacy	/uploads/1754245925701.jpg	2025-08-03 11:32:05.86433	2025-08-03 11:32:05.86433
8	The Cultural Economy	Brian Ndoko	2025-08-03	Fmcc hosted an economic empowerment workshop for artisans, training them in pricing, branding, and exporting cultural products. Bead Makers,sculptors, and cloth weavers were linked to B2B buyers and given tools through microgrant scheme. "We are not just preserving the culture ; we are monetixing it ethically", emphasized by th FMCC Director . The event closed with a lively showcase of handcrafted goods	/uploads/1754246953940.jpg	2025-08-03 11:49:14.040887	2025-08-03 11:49:14.040887
7	The power of Languages	Daniel Eyo	2025-08-02	Language is the soul of culture , FMCC in collaboration with local educators introduced Mokpwe language clubs in five schools within Buea and Limbe. The launch included song competitions, oral debates and reading of folk tales. Children proundly recited ancestral proverbs , sparking joy in parents and elders. Plans are underwayto produce a childrens mokpwe dictionary and mobile learning app	/uploads/1754247183824.JPG	2025-08-03 11:37:41.749482	2025-08-03 11:53:04.103362
\.


--
-- TOC entry 4836 (class 0 OID 24588)
-- Dependencies: 220
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contacts (id, name, email, phone, message, created_at) FROM stdin;
\.


--
-- TOC entry 4838 (class 0 OID 24598)
-- Dependencies: 222
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.events (id, title, date, description, location, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 4842 (class 0 OID 24621)
-- Dependencies: 226
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.notifications (id, title, date, message, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 4840 (class 0 OID 24609)
-- Dependencies: 224
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payments (id, reference, nkwa_ref, full_name, momo_number, amount, status, created_at, updated_at) FROM stdin;
1	7783a1a4-c6fc-41af-907c-ecbe709b5876	\N	atouba 	+237683702677	100.00	PENDING	2025-06-10 12:03:24.794418	2025-06-10 12:03:24.794418
2	0f8606bf-e04c-453e-b69d-41a0dbbddc26	\N	atouba 	+237683702677	100.00	PENDING	2025-06-10 12:04:09.799474	2025-06-10 12:04:09.799474
3	76da5776-6737-47d7-b3cd-b8ad89849075	\N	atouba 	+237673249374	100.00	PENDING	2025-06-10 12:04:25.953432	2025-06-10 12:04:25.953432
4	10bdcb8f-957d-4780-ac73-553936c8d6a0	\N	atouba 	+237673249374	100.00	PENDING	2025-06-10 12:04:27.14737	2025-06-10 12:04:27.14737
5	b842396c-cb65-4498-bd11-3ab0f5f12195	\N	atouba 	+237673249374	100.00	PENDING	2025-06-10 12:04:28.052265	2025-06-10 12:04:28.052265
6	ad9dd616-03cb-471e-a87c-dd57458a0700	\N	atouba 	+237673249374	100.00	PENDING	2025-06-10 12:04:51.084481	2025-06-10 12:04:51.084481
7	06f36a1c-dbac-43e9-a9dd-6f93427f67c2	\N	Atouba Dalina	+237683702677	100.00	PENDING	2025-06-10 12:27:07.677106	2025-06-10 12:27:07.677106
8	cec2cfb3-c79b-4853-be97-f5d3046135a9	\N	atoba	+237673249374	100.00	PENDING	2025-06-10 12:56:55.113487	2025-06-10 12:56:55.113487
9	b2e3dc57-32bb-41e1-96e3-2f7a5a48be9b	\N	atouba	+237673249374	100.00	PENDING	2025-06-10 12:57:24.417711	2025-06-10 12:57:24.417711
10	7edb49fd-c81f-459b-b098-6e5a2af7c320	\N	atouba	+237673249374	100.00	PENDING	2025-06-10 12:58:00.969694	2025-06-10 12:58:00.969694
11	568ecd17-8706-4411-a0a9-b65eaa933019	\N	Atouba Dalina	+237683702677	500.00	PENDING	2025-06-10 12:58:49.187272	2025-06-10 12:58:49.187272
12	725c1193-2dfc-4b25-bf68-fa3183d55a9f	\N	atouba Dalina	+237683702677	100.00	PENDING	2025-06-10 13:51:30.05315	2025-06-10 13:51:30.05315
13	78a23f2d-1c22-40d6-9bad-804aa6a8d238	\N	atouba Dalina	+237683702677	2000.00	PENDING	2025-06-10 13:52:06.681992	2025-06-10 13:52:06.681992
14	23ffcdf0-605a-446a-9442-102a011f8c7f	\N	atouba Dalina	+237683702677	300.00	PENDING	2025-06-10 13:52:14.908139	2025-06-10 13:52:14.908139
15	fbd6c399-4b7f-4ed7-a992-3654a509b870	\N	atouba	+237672347652	100.00	PENDING	2025-06-10 14:13:02.730736	2025-06-10 14:13:02.730736
16	0bc33643-2711-4946-94ca-c578064bbee5	\N	atouba	+237672347652	100.00	PENDING	2025-06-10 14:13:12.900311	2025-06-10 14:13:12.900311
17	1f33af12-a48d-4167-80a4-df5e26824d50	\N	atouba	+237673249374	2000.00	PENDING	2025-06-11 10:13:59.22109	2025-06-11 10:13:59.22109
18	4cb922b6-2a5d-4ffe-b58e-450d3517631c	\N	atouba	+237673249374	2000.00	PENDING	2025-06-11 10:14:05.687906	2025-06-11 10:14:05.687906
19	c57f771f-ff85-4d34-bd54-c13993f806bb	\N	atouba	+237673249374	2000.00	PENDING	2025-06-11 10:14:09.63023	2025-06-11 10:14:09.63023
20	bab22463-bfe6-43e6-a7d4-ded044e25225	\N	bvdv	+237673249374	100.00	PENDING	2025-06-11 11:06:52.939521	2025-06-11 11:06:52.939521
21	08a44e7f-1a19-4edd-9a01-630fe361df9e	\N	bvdv	+237673249374	100.00	PENDING	2025-06-11 11:06:54.221619	2025-06-11 11:06:54.221619
22	6fa1a43d-ad6c-407d-8203-b84d57d98f98	\N	bvdv	+237673249374	100.00	PENDING	2025-06-11 11:06:55.455552	2025-06-11 11:06:55.455552
23	4cd1bc9c-1a45-499f-9fb8-60d964e844dd	\N	bvdv	+237673249374	100.00	PENDING	2025-06-11 11:07:04.121484	2025-06-11 11:07:04.121484
24	c6cc0938-fd3c-442c-ad29-e45f603ddd18	\N	bvdv	+237673249374	100.00	PENDING	2025-06-11 11:07:43.583472	2025-06-11 11:07:43.583472
25	0e7ccc01-a21d-4372-b8af-931a96aae617	\N	atouba	+237673249374	10000.00	PENDING	2025-06-11 15:49:54.955902	2025-06-11 15:49:54.955902
26	82947bb5-57b7-44a5-81ea-05692a49044f	\N	atouba	+237673249374	10000.00	PENDING	2025-06-11 15:50:16.060269	2025-06-11 15:50:16.060269
27	f0b8f9b4-c206-4027-9769-76d8ee8b24c3	\N	atouba	+237673249374	10000.00	PENDING	2025-06-11 15:50:18.055417	2025-06-11 15:50:18.055417
28	0b756ba8-6a58-49dc-8c1c-89efd2b2869b	\N	dalina	+237673249374	100.00	PENDING	2025-06-12 14:12:40.368975	2025-06-12 14:12:40.368975
29	2898f9f9-3ece-4b88-b28c-9bf63870c500	\N	dalina	+237673249374	100.00	PENDING	2025-06-12 14:12:46.123637	2025-06-12 14:12:46.123637
30	fcf92bf3-9b32-4561-9b2b-b77aec37ecaf	\N	dalina	+237673249374	100.00	PENDING	2025-06-12 14:12:47.033698	2025-06-12 14:12:47.033698
31	8b3c379a-6eaa-473b-a625-cb6bb30437eb	\N	dalina	+237673249374	100.00	PENDING	2025-06-12 14:12:47.858464	2025-06-12 14:12:47.858464
32	8ec57cd0-bf3f-4a0e-820d-deb57085b03d	\N	dalina	+237673249374	100.00	PENDING	2025-06-12 14:12:48.744029	2025-06-12 14:12:48.744029
33	f47f0667-8878-4459-87e6-36d78b800ece	\N	;lj;lkj	+237683702677	100.00	PENDING	2025-06-13 18:48:10.195636	2025-06-13 18:48:10.195636
34	dc4c3655-4009-42a6-8599-a4824a26a6c9	\N	;lj;lkj	+237683702677	100.00	PENDING	2025-06-13 18:48:13.3616	2025-06-13 18:48:13.3616
35	f8afcdc2-6ca5-4340-ae44-30f0f6db14e6	\N	Atouba Dalina	+237673249374	100.00	PENDING	2025-06-13 20:44:48.201201	2025-06-13 20:44:48.201201
36	b7587f28-f699-49d2-bfbc-1adc600e9174	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:28:28.758147	2025-08-02 17:28:28.758147
37	7d72984c-4552-4e05-9756-379bbedafe49	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:28:41.501049	2025-08-02 17:28:41.501049
38	718ce483-e168-4db8-80bd-1a4bb2d66b7f	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:28:42.332424	2025-08-02 17:28:42.332424
39	46745ebe-f798-42d6-a09a-6325da69ad04	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:28:43.032108	2025-08-02 17:28:43.032108
40	2e1c2dfd-8a1c-4244-bd43-09b07f3ba481	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:28:43.213704	2025-08-02 17:28:43.213704
41	cb0e6f62-7fa0-4f57-ae72-6e704a9c0638	\N	atouba	+237673249372	2000.00	PENDING	2025-08-02 17:37:37.52055	2025-08-02 17:37:37.52055
74	d2b3e274-a745-44be-bf3f-f88ff07dfde2	\N	atouba Dalina	+237673249374	2000.00	PENDING	2025-08-02 20:41:07.050755	2025-08-02 20:41:07.050755
75	d4c7feea-a4fe-4fd7-b805-96616e588825	\N	Atouba Dalina	+237673249374	2000.00	PENDING	2025-08-03 18:57:05.062124	2025-08-03 18:57:05.062124
76	c542d1a8-f33e-4470-b4c4-3abb6c42eb79	\N	atouba Dalina	+237673249374	2000.00	PENDING	2025-08-03 19:00:01.508746	2025-08-03 19:00:01.508746
77	dc5c7e45-fd85-4b3d-b711-e4a6e0095ba8	\N	atoubs	+237673249374	2000.00	PENDING	2025-08-04 16:23:08.947041	2025-08-04 16:23:08.947041
\.


--
-- TOC entry 4853 (class 0 OID 0)
-- Dependencies: 217
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blogs_id_seq', 8, true);


--
-- TOC entry 4854 (class 0 OID 0)
-- Dependencies: 219
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- TOC entry 4855 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.events_id_seq', 1, true);


--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 225
-- Name: notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.notifications_id_seq', 1, false);


--
-- TOC entry 4857 (class 0 OID 0)
-- Dependencies: 223
-- Name: payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payments_id_seq', 77, true);


--
-- TOC entry 4677 (class 2606 OID 24586)
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- TOC entry 4679 (class 2606 OID 24596)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- TOC entry 4681 (class 2606 OID 24607)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- TOC entry 4687 (class 2606 OID 24630)
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- TOC entry 4683 (class 2606 OID 24617)
-- Name: payments payments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- TOC entry 4685 (class 2606 OID 24619)
-- Name: payments payments_reference_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_reference_key UNIQUE (reference);


-- Completed on 2025-08-04 19:58:01

--
-- PostgreSQL database dump complete
--

