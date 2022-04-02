var r1_end = 15;
var r2_end = 15;//30;
var r3_end = 15;//70;
var r3_exists = false;
var match_result = new Array("KKR", "DC", "PBKS", "GT", "RR", "RCB", "LSG", "KKR");
var mat_per_week = new Array(7,15,24,33,41,50,59,67,69);
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

var steam = new Array("Electrical", "Reservoir Performance", "Well Construction", "Well Production Services", "Rest of STSI");
var steam_st = new Array("Electrical", "RP", "WEC", "WPRS", "Rest of STSI");
var steam_short = new Array("Elec", "RP", "WEC", "WPRS", "RoS");
var steam_part = new Array(0,0,0,0,0);
var steam_avg = new Array(0.0,0.0,0.0,0.0,0.0);
var steam_cnt = steam.length;
var player_list = new Array("Abhijeet V S", "Abhijit A S", "Abhinay K", "Aditya J", "Aditya S", "Akansha Y", "Akash B", "Akash K", "Akshay J", "Akshay Satpute", "Akshay Shete", "Aliasgar S C", "Aman A", "Amit K D", "Amol M", "Anil K S", "AnilKumar H", "Aniruddha V", "Anita Y D", "Annpurna T", "Anuj K", "Anuja S", "Ashwath A P", "Aslam S", "Bhagwat J G", "Bhairavkumar K T", "Bhargavi J", "Bhavesh J", "Bineesh P", "Chetan S", "Chetanya D B", "Chintan S", "Damodar A", "Deepak D", "Devendra K", "Dhananjaya K", "Dharmendra Y", "Digambar P", "Dileep K V", "Dinesh K", "Dipika D", "Farshad O", "Gagandeep S", "Ganesh L", "Gauri J", "Gayatri A Z", "Hari R", "Harish K L", "Jerosh J", "Jijabhau S", "Jitendra K A", "Joy B", "Jyoti S D", "Kailasa M D", "Kapil T", "Karan D", "Keyour W", "Kiran A P", "Kiran P", "Kiran S", "Kirti A M", "Kungiveethil C V", "Lokendra C", "Lokesh S", "Mahejabeen B", "Manjunath K G", "Manoj B T", "Manoj B", "Manoranjan J", "Mantaj S", "Mayur S S", "Missula R R", "Neelamjyoti L", "Neha P", "Nitesh G", "Nitish P", "Omprakash U", "Onkar V M", "Palash D", "Pankaj C", "Piyush P K", "Prakash K", "Prasad R P", "Prashant S", "Pravinkumar ", "Puja A D", "Puja D S", "Punit K R", "Punith G", "Purshottam S", "Rahul P", "Raj N S", "Rajasekar M", "Rani B P", "Rani K U S", "Ranjit S", "Ravi S A", "Ravikant K", "Ravindra B", "Ravindra P", "Reehas R", "Rejeesh H", "Renjith C S", "Revati M", "Rijumoni D", "Rohan K", "Rucha D", "Ruchir S", "Sachin T P", "Sajith U", "Saket P", "Samruddhi P V", "Sandeep S", "Sanjeev V", "Sanjeevkumar M", "Sanket G", "Santhan K", "Santosh G", "Santosh P", "Sashank V", "Satish P", "Sayan B", "Senthil K K", "Shashank P", "Shekhar S", "Shikha C", "Shivam A", "Shivam V", "Shourabh A", "Shriganesh M", "Shrishail D", "Shubham A T", "Shubham G", "Subhasis M", "Sudarshan T", "Sudhakar S", "Sujit P", "Suman V", "Sumati ", "Sunil K", "Suraj B", "Tushar S", "Vaibhav M", "Vanita R S", "Vidya T", "Vignesh J", "Vijay K", "Vikram M", "Vinod C", "Vipul K P", "Vishal K", "Vishnu K R", "Yogesh J");
var players = player_list.length;
var player_steam_list = new Array("WEC", "RP", "RP", "WPRS", "RoS", "WEC", "RoS", "RP", "WEC", "RoS", "WEC", "WPRS", "Elec", "WPRS", "WEC", "RoS", "Elec", "WEC", "Elec", "Elec", "RoS", "RP", "RP", "WPRS", "WPRS", "Elec", "WEC", "RoS", "Elec", "WEC", "RoS", "RP", "RoS", "WPRS", "Elec", "RoS", "WEC", "RP", "RP", "Elec", "Elec", "WPRS", "RP", "WEC", "RP", "Elec", "Elec", "Elec", "WEC", "RP", "RoS", "WPRS", "Elec", "WPRS", "Elec", "WEC", "RP", "WPRS", "WPRS", "RoS", "RP", "WEC", "WPRS", "WEC", "RP", "RoS", "WEC", "WEC", "RoS", "Elec", "WPRS", "Elec", "RP", "WEC", "RP", "Elec", "Elec", "Elec", "Elec", "WPRS", "WEC", "WEC", "WPRS", "WPRS", "RP", "RP", "WPRS", "WEC", "Elec", "RoS", "RoS", "Elec", "RP", "RoS", "RoS", "WEC", "RoS", "WPRS", "WPRS", "RoS", "WPRS", "WPRS", "Elec", "WEC", "RoS", "WEC", "RP", "RoS", "Elec", "WPRS", "RP", "WPRS", "WEC", "WEC", "WPRS", "WPRS", "WPRS", "WEC", "RoS", "RP", "WEC", "RoS", "RP", "WPRS", "RoS", "Elec", "WEC", "WEC", "RoS", "Elec", "Elec", "RoS", "RP", "WPRS", "Elec", "WPRS", "WPRS", "WEC", "WPRS", "RP", "RP", "WEC", "WPRS", "RoS", "Elec", "RP", "Elec", "WEC", "WPRS", "RoS", "WPRS", "WEC", "WPRS");

var list_prad1 = new Array();
var list_prad2 = new Array();
var picks = new Array();
var player_score = new Array();
var player_ranks = new Array();
var player_list_ranks = new Array();
var player_score_ranks = new Array();
var player_ranks_ranks = new Array();
var steam_list_ranks = new Array();
var steam_score_ranks = new Array();
var steam_ranks_ranks = new Array();
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

picks[0].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Abhijeet V S_0
picks[1].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Abhijit A S_1
picks[2].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Abhinay K_2
picks[3].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Aditya J_3
picks[4].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "MI", "DC"); // Aditya S_4
picks[5].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Akansha Y_5
picks[6].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Akash B_6
picks[7].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Akash K_7
picks[8].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Akshay J_8
picks[9].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Akshay Satpute_9
picks[10].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "SRH", "RR", "MI", "DC"); // Akshay Shete_10
picks[11].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); // Aliasgar S C_11
picks[12].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Aman A_12
picks[13].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Amit K D_13
picks[14].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Amol M_14
picks[15].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "LSG"); // Anil K S_15
picks[16].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // AnilKumar H_16
picks[17].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Aniruddha V_17
picks[18].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Anita Y D_18
picks[19].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Annpurna T_19
picks[20].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Anuj K_20
picks[21].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Anuja S_21
picks[22].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ashwath A P_22
picks[23].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); // Aslam S_23
picks[24].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Bhagwat J G_24
picks[25].pick = new Array("KKR", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "KKR", "DC"); // Bhairavkumar K T_25
picks[26].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Bhargavi J_26
picks[27].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "LSG"); // Bhavesh J_27
picks[28].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Bineesh P_28
picks[29].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Chetan S_29
picks[30].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Chetanya D B_30
picks[31].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Chintan S_31
picks[32].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "PBKS", "LSG", "RCB", "MI", "LSG"); // Damodar A_32
picks[33].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RR", "MI", "LSG"); // Deepak D_33
picks[34].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "LSG", "RR", "MI", "LSG"); // Devendra K_34
picks[35].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Dhananjaya K_35
picks[36].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Dharmendra Y_36
picks[37].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Digambar P_37
picks[38].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Dileep K V_38
picks[39].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Dinesh K_39
picks[40].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Dipika D_40
picks[41].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Farshad O_41
picks[42].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); // Gagandeep S_42
picks[43].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Ganesh L_43
picks[44].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Gauri J_44
picks[45].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Gayatri A Z_45
picks[46].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Hari R_46
picks[47].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Harish K L_47
picks[48].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Jerosh J_48
picks[49].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); // Jijabhau S_49
picks[50].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Jitendra K A_50
picks[51].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); // Joy B_51
picks[52].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Jyoti S D_52
picks[53].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kailasa M D_53
picks[54].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kapil T_54
picks[55].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Karan D_55
picks[56].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Keyour W_56
picks[57].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Kiran A P_57
picks[58].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); // Kiran P_58
picks[59].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Kiran S_59
picks[60].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Kirti A M_60
picks[61].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Kungiveethil C V_61
picks[62].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Lokendra C_62
picks[63].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); // Lokesh S_63
picks[64].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); // Mahejabeen B_64
picks[65].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Manjunath K G_65
picks[66].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); // Manoj B T_66
picks[67].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Manoj B_67
picks[68].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "KKR", "DC"); // Manoranjan J_68
picks[69].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Mantaj S_69
picks[70].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Mayur S S_70
picks[71].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "MI", "LSG"); // Missula R R_71
picks[72].pick = new Array("KKR", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Neelamjyoti L_72
picks[73].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Neha P_73
picks[74].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Nitesh G_74
picks[75].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Nitish P_75
picks[76].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Omprakash U_76
picks[77].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Onkar V M_77
picks[78].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Palash D_78
picks[79].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Pankaj C_79
picks[80].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Piyush P K_80
picks[81].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Prakash K_81
picks[82].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Prasad R P_82
picks[83].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); // Prashant S_83
picks[84].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Pravinkumar _84
picks[85].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Puja A D_85
picks[86].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Puja D S_86
picks[87].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Punit K R_87
picks[88].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RCB", "MI", "LSG"); // Punith G_88
picks[89].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Purshottam S_89
picks[90].pick = new Array("KKR", "DC", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Rahul P_90
picks[91].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Raj N S_91
picks[92].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); // Rajasekar M_92
picks[93].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "PBKS", "LSG", "RR", "MI", "DC"); // Rani B P_93
picks[94].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); // Rani K U S_94
picks[95].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ranjit S_95
picks[96].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ravi S A_96
picks[97].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "KKR", "DC"); // Ravikant K_97
picks[98].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); // Ravindra B_98
picks[99].pick = new Array("KKR", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Ravindra P_99
picks[100].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Reehas R_100
picks[101].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Rejeesh H_101
picks[102].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "PBKS", "SRH", "RR", "KKR", "LSG"); // Renjith C S_102
picks[103].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Revati M_103
picks[104].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Rijumoni D_104
picks[105].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Rohan K_105
picks[106].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Rucha D_106
picks[107].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Ruchir S_107
picks[108].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); // Sachin T P_108
picks[109].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Sajith U_109
picks[110].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Saket P_110
picks[111].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Samruddhi P V_111
picks[112].pick = new Array("KKR", "MI", "RCB", "GT", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Sandeep S_112
picks[113].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "KKR", "DC"); // Sanjeev V_113
picks[114].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); // Sanjeevkumar M_114
picks[115].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "DC"); // Sanket G_115
picks[116].pick = new Array("KKR", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); // Santhan K_116
picks[117].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); // Santosh G_117
picks[118].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); // Santosh P_118
picks[119].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Sashank V_119
picks[120].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Satish P_120
picks[121].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Sayan B_121
picks[122].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); // Senthil K K_122
picks[123].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Shashank P_123
picks[124].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); // Shekhar S_124
picks[125].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Shikha C_125
picks[126].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); // Shivam A_126
picks[127].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Shivam V_127
picks[128].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Shourabh A_128
picks[129].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); // Shriganesh M_129
picks[130].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Shrishail D_130
picks[131].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "LSG"); // Shubham A T_131
picks[132].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RCB", "MI", "DC"); // Shubham G_132
picks[133].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); // Subhasis M_133
picks[134].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); // Sudarshan T_134
picks[135].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); // Sudhakar S_135
picks[136].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "LSG"); // Sujit P_136
picks[137].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Suman V_137
picks[138].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Sumati _138
picks[139].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "DC"); // Sunil K_139
picks[140].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Suraj B_140
picks[141].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); // Tushar S_141
picks[142].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "CSK", "LSG", "RR", "MI", "LSG"); // Vaibhav M_142
picks[143].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Vanita R S_143
picks[144].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); // Vidya T_144
picks[145].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); // Vignesh J_145
picks[146].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "PBKS", "SRH", "RR", "MI", "DC"); // Vijay K_146
picks[147].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); // Vikram M_147
picks[148].pick = new Array("KKR", "DC", "PBKS", "GT", "RR", "KKR", "LSG", "KKR", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); // Vinod C_148
picks[149].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Vipul K P_149
picks[150].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); // Vishal K_150
picks[151].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); // Vishnu K R_151
picks[152].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); // Yogesh J_152

var past_score = new Array();
var past_rank = new Array();
var past_Dscore = new Array();
var past_Drank = new Array();
for(m=0;m<matches;m++)
{
	past_score[m] = new Object();
	past_rank[m] = new Object();
	past_Dscore[m] = new Object();
	past_Drank[m] = new Object();
}
for(m=0;m<matches;m++)
{
	past_score[m].val = new Array();
	past_rank[m].val = new Array();
	past_Dscore[m].val = new Array();
	past_Drank[m].val = new Array();
	for(n=0;n<players;n++)
	{
		past_score[m].val[n] = 0;
		past_rank[m].val[n] = 0;
	}
	for(n=0;n<steam_cnt;n++)
	{
		past_Dscore[m].val[n] = 0;
		past_Drank[m].val[n] = 0;
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

	var tem_play = new Array();
	var tem_won = new Array();
	var tem_won1 = new Array();
	var tem_pts = new Array();
	var supps1 = new Array();
	var supps2 = new Array();
	var supps3 = new Array();
	var supps = new Array();
	var new_teams_list = new Array();
	var new_teams_list1 = new Array();
