var r1_end = 15;
var r2_end = 15;//30;
var r3_end = 15;//70;
var r3_exists = false;
var match_result = new Array("KKR", "DC", "PBKS");
//match_result[0] = "KKR";
//match_result[1] = "DC";
var semi_result = new Array();

var teams_list = new Array("Chennai Super Kings", "Delhi Capitals", "Gujarat Titans", "Kolkata Knight Riders", "Lucknow Super Gaints", "Mumbai Indians", "Punjab Kings", "Royal Challengers Banglore", "Rajasthan Royals", "Sun Risers Hyderabad");
var teams_list_st = new Array("CSK", "DC", "GT", "KKR", "LSG", "MI", "PBKS", "RCB", "RR", "SRH");
var teams = teams_list_st.length;
/*		0 - Mumbai Indians
		1 - Chennai Super Kings
		2 - Delhi Capitals
		3 - Punjab Kings
		4 - Rajasthan Royals
		5 - Kolkata Knight Riders
		6 - Royal Challengers Banglore
		7 - Sun Risers Hyderabad
		8 - Gujarat Titans
		9 - Lucknow Super Gaints
		, "On Going","Not Started","Not Selected","To be decided"
		10 - Ongoing
		11 - Not started
		12 - Abandoned*/
//xz = teams_list_st.indexOf("RR");
//alert(xz);
var steam = new Array("Well Production Services", "Well Construction", "Electrical", "Reservoir Performance", "Rest of STSI");
var steam_st = new Array("WPRS", "WEC", "Elec", "RP", "RoS");
var steam_cnt = steam.length;
var player_list = new Array("Abhijeet Vishvas Sonawane", "Abhijit Arun Salunkhe", "Abhinay Kurukundu", "Aditya Jog", "Aditya Sonawane", "Akansha Yadav", "Akash Baliyan", "Akash Konpratiwar", "Akshay Jain", "Akshay Satpute", "Akshay Shete", "Aliasgar Saifuddin Contractor", "Aman Arab", "Amit Kumar Das", "Amol Mulunjkar", "Anil Kumar Sahoo", "AnilKumar Halaiah", "Aniruddha Vaidya", "Anita Yashwant Dadmal", "Annpurna Thakur", "Anuj Kasar", "Anuja Sahasrabudhe", "Ashwath Avaduth Potadar", "Aslam Shaikh", "Bhagwat Jagan Gawarkar", "Bhairavkumar Kishorlal Tailor", "Bhargavi Joshirao", "Bhavesh Jadav", "Bineesh Premarajan", "Chetan Sakore", "Chetanya Dev Bharadwaj", "Chintan Sharma", "Damodar Acharya", "Deepak Deval", "Devendra Katre", "Dhananjaya Krishna", "Dharmendra Yadav", "Digambar Prasad", "Dileep Kuppadakkath Vadakkedath", "Dinesh Kumar", "Dipika Dutta", "Farshad Odakkal", "Gagandeep Singh", "Ganesh Lolge", "Gauri Joshi", "Gayatri Arun Zoman", "Hari Rathod", "Harish Kumar Lakshminarayan", "Jerosh J", "Jijabhau Sonavane", "Jitendra Kumar Agrahari", "Joy Biju", "Jyoti Shailesh Darekar", "Kailasa Mani D", "Kapil Trivedi", "Karan Deshmukh", "Keyour Waghela", "Kiran Anil Pachpande", "Kiran Pawar", "Kiran Shinde", "Kirti Ashok Mahajan", "Kungiveethil Cherinjandi Vyshnave", "Lokendra Choudhary", "Lokesh Sharma", "Mahejabeen Benal", "Manjunath Kashappa Gurikar", "Manoj Balajirao Telange", "Manoj Bhadane", "Manoranjan Jha", "Mantaj Sharma", "Mayur Shivnarayan Soni", "Missula Renuka Ramalakshmi", "Neelamjyoti Lahkar", "Neha Pise", "Nitesh Gaikwad", "Nitish Pandya", "Omprakash Unnikrishnan", "Onkar Vishwmbhar Mahajan", "Palash Dash", "Pankaj Chaudhary", "Piyush Prakash Kulkarni", "Prakash Kalita", "Prasad Ramesh Potadar", "Prashant Sharma", "Pravinkumar", "Puja Adhikrao Dhanawade", "Puja Devidas Satange", "Punit Kumar Ray", "Punith Gowda", "Purshottam Singh", "Rahul Phadke", "Raj Narayan Singh", "Rajasekar Mailvaganan", "Rani Bruno Pereira", "Rani Kumari Umed Singh", "Ranjit Sundaramurthi", "Ravi Shankar Avancha", "Ravikant Kumar", "Ravindra Bhamare", "Ravindra Patil", "Reehas Raj", "Rejeesh Hariharan", "Renjith Chandrababu Shylaja", "Revati Malwale", "Rijumoni Dutta", "Rohan Kadam", "Rucha Deshmukh", "Ruchir Srivastava", "Sachin Tukaram Patil", "Sajith Usman", "Saket Patel", "Samruddhi Prashant Vaidya", "Sandeep Shinde", "Sanjeev Venkannavar", "Sanjeevkumar Mourya", "Sanket Gujarathi", "Santhan Kampalli", "Santosh Gaikwad", "Santosh Patole", "Sashank Vasireddy", "Satish Patil", "Sayan Banerjee", "Senthil Kumar Karunamoorthy", "Shashank Prakash", "Shekhar Sharma", "Shikha Chauhan", "Shivam Avasthi", "Shivam Verma", "Shourabh Avishek", "Shriganesh Manurkar", "Shrishail Dhavaleshwar", "Shubham Aniruddh Tiwari", "Shubham Gurjar", "Subhasis Mohanty", "Sudarshan Thantry", "Sudhakar Sherkar", "Sujit Patne", "Suman Velvaluri", "Sumati", "Sunil Kaler", "Suraj Bhosale", "Tushar Shinde", "Vaibhav Marfatia", "Vanita Rajendra Shinde", "Vidya Tonage", "Vignesh Jayaraman", "Vijay Kumar", "Vikram Mulik", "Vinod Chavan", "Vipul Kumar Patel", "Vishal Kokate", "Vishnu Kanhiravallymadhom Ramanan", "Yogesh Jain");
var players = player_list.length;
var player_steam_list = new Array("WEC", "RP", "RP", "WPRS", "RoS", "WEC", "RoS", "RP", "WEC", "RoS", "WEC", "WPRS", "Elec", "WPRS", "WEC", "RoS", "Elec", "WEC", "Elec", "Elec", "RoS", "RP", "RP", "WPRS", "WPRS", "Elec", "WEC", "RoS", "Elec", "WEC", "RoS", "RP", "RoS", "WPRS", "Elec", "RoS", "WEC", "RP", "RP", "Elec", "Elec", "WPRS", "RP", "WEC", "RP", "Elec", "Elec", "Elec", "WEC", "RP", "RoS", "WPRS", "Elec", "WPRS", "Elec", "WEC", "RP", "WPRS", "WPRS", "RoS", "RP", "WEC", "WPRS", "WEC", "RP", "RoS", "WEC", "WEC", "RoS", "Elec", "WPRS", "Elec", "RP", "WEC", "RP", "Elec", "Elec", "Elec", "Elec", "WPRS", "WEC", "WEC", "WPRS", "WPRS", "RP", "RP", "WPRS", "WEC", "Elec", "RoS", "RoS", "Elec", "RP", "RoS", "RoS", "WEC", "RoS", "WPRS", "WPRS", "RoS", "WPRS", "WPRS", "Elec", "WEC", "RoS", "WEC", "RP", "RoS", "Elec", "WPRS", "RP", "WPRS", "WEC", "WEC", "WPRS", "WPRS", "WPRS", "WEC", "RoS", "RP", "WEC", "RoS", "RP", "WPRS", "RoS", "Elec", "WEC", "WEC", "RoS", "Elec", "Elec", "RoS", "RP", "WPRS", "Elec", "WPRS", "WPRS", "WEC", "WPRS", "RP", "RP", "WEC", "WPRS", "RoS", "Elec", "RP", "Elec", "WEC", "WPRS", "RoS", "WPRS", "WEC", "WPRS");
var player_list_ranks = new Array();
var list_prad1 = new Array();
var list_prad2 = new Array();
var picks = new Array();
var player_score = new Array();
var player_ranks = new Array();
var player_score_ranks = new Array();
var player_ranks_ranks = new Array();
var score_prad1 = new Array();
var score_prad2 = new Array();
for(i=0;i<players;i++)
{
	picks[i] = new Object();
	player_list_ranks[i] = player_list[i];
	list_prad1[i] =  player_list[i];
	list_prad2[i] =  player_list[i];
	player_score[i] = 0;
}
var dat = new Array("26-03", "27-03", "27-03", "28-03", "29-03", "30-03", "31-03", "01-04", "02-04", "02-04", "03-04", "04-04", "05-04", "06-04", "07-04");
var matches = dat.length;
//alert("matches = " + matches);

//alert("players = " + players);
var team1 = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG");
var team2 = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "LSG", "RCB", "MI", "DC");
var team1_bets = new Array();
var team2_bets = new Array();
picks[0].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Abhijeet Vishvas Sonawane_0
picks[1].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Abhijit Arun Salunkhe_1
picks[2].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Abhinay Kurukundu_2
picks[3].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Aditya Jog_3
picks[4].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "MI", "DC"); // Aditya Sonawane_4
picks[5].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Akansha Yadav_5
picks[6].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Akash Baliyan_6
picks[7].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Akash Konpratiwar_7
picks[8].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Akshay Jain_8
picks[9].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Akshay Satpute_9
picks[10].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "SRH", "RR", "MI", "DC"); // Akshay Shete_10
picks[11].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); // Aliasgar Saifuddin Contractor_11
picks[12].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Aman Arab_12
picks[13].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Amit Kumar Das_13
picks[14].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Amol Mulunjkar_14
picks[15].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "LSG"); // Anil Kumar Sahoo_15
picks[16].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // AnilKumar Halaiah_16
picks[17].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Aniruddha Vaidya_17
picks[18].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Anita Yashwant Dadmal_18
picks[19].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Annpurna Thakur_19
picks[20].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Anuj Kasar_20
picks[21].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Anuja Sahasrabudhe_21
picks[22].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ashwath Avaduth Potadar_22
picks[23].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); // Aslam Shaikh_23
picks[24].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Bhagwat Jagan Gawarkar_24
picks[25].pick = new Array("KKR", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "KKR", "DC"); // Bhairavkumar Kishorlal Tailor_25
picks[26].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Bhargavi Joshirao_26
picks[27].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "LSG"); // Bhavesh Jadav_27
picks[28].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Bineesh Premarajan_28
picks[29].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Chetan Sakore_29
picks[30].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Chetanya Dev Bharadwaj_30
picks[31].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Chintan Sharma_31
picks[32].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "PBKS", "LSG", "RCB", "MI", "LSG"); // Damodar Acharya_32
picks[33].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RR", "MI", "LSG"); // Deepak Deval_33
picks[34].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "LSG", "RR", "MI", "LSG"); // Devendra Katre_34
picks[35].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Dhananjaya Krishna_35
picks[36].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Dharmendra Yadav_36
picks[37].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Digambar Prasad_37
picks[38].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Dileep Kuppadakkath Vadakkedath_38
picks[39].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Dinesh Kumar_39
picks[40].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Dipika Dutta_40
picks[41].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Farshad Odakkal_41
picks[42].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); // Gagandeep Singh_42
picks[43].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Ganesh Lolge_43
picks[44].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Gauri Joshi_44
picks[45].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Gayatri Arun Zoman_45
picks[46].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Hari Rathod_46
picks[47].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Harish Kumar Lakshminarayan_47
picks[48].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Jerosh J_48
picks[49].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); // Jijabhau Sonavane_49
picks[50].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Jitendra Kumar Agrahari_50
picks[51].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); // Joy Biju_51
picks[52].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Jyoti Shailesh Darekar_52
picks[53].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kailasa Mani D_53
picks[54].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kapil Trivedi_54
picks[55].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Karan Deshmukh_55
picks[56].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Keyour Waghela_56
picks[57].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Kiran Anil Pachpande_57
picks[58].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); // Kiran Pawar_58
picks[59].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kiran Shinde_59
picks[60].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Kirti Ashok Mahajan_60
picks[61].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Kungiveethil Cherinjandi Vyshnave_61
picks[62].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Lokendra Choudhary_62
picks[63].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); // Lokesh Sharma_63
picks[64].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); // Mahejabeen Benal_64
picks[65].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Manjunath Kashappa Gurikar_65
picks[66].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Manoj Balajirao Telange_66
picks[67].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Manoj Bhadane_67
picks[68].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "KKR", "DC"); // Manoranjan Jha_68
picks[69].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Mantaj Sharma_69
picks[70].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Mayur Shivnarayan Soni_70
picks[71].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "MI", "LSG"); // Missula Renuka Ramalakshmi_71
picks[72].pick = new Array("KKR", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Neelamjyoti Lahkar_72
picks[73].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Neha Pise_73
picks[74].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Nitesh Gaikwad_74
picks[75].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Nitish Pandya_75
picks[76].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Omprakash Unnikrishnan_76
picks[77].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Onkar Vishwmbhar Mahajan_77
picks[78].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Palash Dash_78
picks[79].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Pankaj Chaudhary_79
picks[80].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Piyush Prakash Kulkarni_80
picks[81].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Prakash Kalita_81
picks[82].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Prasad Ramesh Potadar_82
picks[83].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Prashant Sharma_83
picks[84].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Pravinkumar_84
picks[85].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Puja Adhikrao Dhanawade_85
picks[86].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Puja Devidas Satange_86
picks[87].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Punit Kumar Ray_87
picks[88].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RCB", "MI", "LSG"); // Punith Gowda_88
picks[89].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Purshottam Singh_89
picks[90].pick = new Array("KKR", "DC", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Rahul Phadke_90
picks[91].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Raj Narayan Singh_91
picks[92].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); // Rajasekar Mailvaganan_92
picks[93].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "PBKS", "LSG", "RR", "MI", "DC"); // Rani Bruno Pereira_93
picks[94].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Rani Kumari Umed Singh_94
picks[95].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ranjit Sundaramurthi_95
picks[96].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ravi Shankar Avancha_96
picks[97].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "KKR", "DC"); // Ravikant Kumar_97
picks[98].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); // Ravindra Bhamare_98
picks[99].pick = new Array("KKR", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ravindra Patil_99
picks[100].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Reehas Raj_100
picks[101].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Rejeesh Hariharan_101
picks[102].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "PBKS", "SRH", "RR", "KKR", "LSG"); // Renjith Chandrababu Shylaja_102
picks[103].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Revati Malwale_103
picks[104].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Rijumoni Dutta_104
picks[105].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Rohan Kadam_105
picks[106].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Rucha Deshmukh_106
picks[107].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Ruchir Srivastava_107
picks[108].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Sachin Tukaram Patil_108
picks[109].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Sajith Usman_109
picks[110].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Saket Patel_110
picks[111].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Samruddhi Prashant Vaidya_111
picks[112].pick = new Array("KKR", "MI", "RCB", "GT", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Sandeep Shinde_112
picks[113].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "KKR", "DC"); // Sanjeev Venkannavar_113
picks[114].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); // Sanjeevkumar Mourya_114
picks[115].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "DC"); // Sanket Gujarathi_115
picks[116].pick = new Array("KKR", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Santhan Kampalli_116
picks[117].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); // Santosh Gaikwad_117
picks[118].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Santosh Patole_118
picks[119].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Sashank Vasireddy_119
picks[120].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Satish Patil_120
picks[121].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Sayan Banerjee_121
picks[122].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Senthil Kumar Karunamoorthy_122
picks[123].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Shashank Prakash_123
picks[124].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Shekhar Sharma_124
picks[125].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Shikha Chauhan_125
picks[126].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Shivam Avasthi_126
picks[127].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Shivam Verma_127
picks[128].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Shourabh Avishek_128
picks[129].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); // Shriganesh Manurkar_129
picks[130].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Shrishail Dhavaleshwar_130
picks[131].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "LSG"); // Shubham Aniruddh Tiwari_131
picks[132].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RCB", "MI", "DC"); // Shubham Gurjar_132
picks[133].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Subhasis Mohanty_133
picks[134].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); // Sudarshan Thantry_134
picks[135].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); // Sudhakar Sherkar_135
picks[136].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "LSG"); // Sujit Patne_136
picks[137].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Suman Velvaluri_137
picks[138].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Sumati_138
picks[139].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "DC"); // Sunil Kaler_139
picks[140].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Suraj Bhosale_140
picks[141].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); // Tushar Shinde_141
picks[142].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "CSK", "LSG", "RR", "MI", "LSG"); // Vaibhav Marfatia_142
picks[143].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Vanita Rajendra Shinde_143
picks[144].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Vidya Tonage_144
picks[145].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Vignesh Jayaraman_145
picks[146].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "PBKS", "SRH", "RR", "MI", "DC"); // Vijay Kumar_146
picks[147].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); // Vikram Mulik_147
picks[148].pick = new Array("KKR", "DC", "PBKS", "GT", "RR", "KKR", "LSG", "KKR", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); // Vinod Chavan_148
picks[149].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Vipul Kumar Patel_149
picks[150].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Vishal Kokate_150
picks[151].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Vishnu Kanhiravallymadhom Ramanan_151
picks[152].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Yogesh Jain_152


var past_score = new Array();
var past_rank = new Array();
for(m=0;m<matches;m++)
{
	past_score[m] = new Object();
	past_rank[m] = new Object();
}
for(m=0;m<matches;m++)
{
	past_score[m].val = new Array();
	past_rank[m].val = new Array();
	for(n=0;n<players;n++)
	{
		past_score[m].val[n] = 0;
		past_rank[m].val[n] = 0;
	}
}
for(i=0;i<matches;i++)
{
	//alert(i);
	team1_bets[i] = 0;
	team2_bets[i] = 0;
	for(j=0;j<players;j++)
	{
		if(picks[j].pick[i]==team1[i])
			team1_bets[i]++;
		else if (picks[j].pick[i]==team2[i])
			team2_bets[i]++;
	}
}
